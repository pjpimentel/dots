import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {updateCdnEndpoint} from './update-cdn-endpoint';
import * as MOCK from './update-cdn-endpoint.mock';

describe('cdn-endpoint', () => {
  const URL = `/cdn/endpoints/${MOCK.response.body.endpoint.id}`;
  const TOKEN = 'bearer-token';
  const mock = new MockAdapter(axios);
  mock.onPut(URL, MOCK.request.body).reply(
    MOCK.response.headers.status,
    MOCK.response.body,
    MOCK.response.headers,
  );
  const context = createContext({
    axios,
    token: TOKEN,
  });
  beforeEach(() => {
    mock.resetHistory();
  });
  describe('update-ssh-key', () => {
    it('should be a fn', () => {
      expect(typeof updateCdnEndpoint).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof updateCdnEndpoint(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _updateCdnEndpoint = updateCdnEndpoint(context);
      const response = await _updateCdnEndpoint({
        ...MOCK.request.body,
        cdn_endpoint_id: MOCK.response.body.endpoint.id,
      });
      Object.assign(response, {request: mock.history.put[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('put');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      /// validate data
      expect(response.data).toBeDefined();
      const {endpoint} = response.data;
      expect(typeof endpoint.id).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
