import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getCdnEndpoint} from './get-cdn-endpoint';
import * as MOCK from './get-cdn-endpoint.mock';

describe('cdn-endpoint', () => {
  const CDN_ENDPOINT_ID = MOCK.response.body.endpoint.id;
  const URL = `/cdn/endpoints/${CDN_ENDPOINT_ID}`;
  const TOKEN = process.env.TEST_TOKEN as string;
  const mock = new MockAdapter(axios);
  mock.onGet(URL).reply(
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
  describe('get-cdn-endpoint', () => {
    it('should be a fn', () => {
      expect(typeof getCdnEndpoint).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getCdnEndpoint(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getCdnEndpoint = getCdnEndpoint(context);
      const response = await _getCdnEndpoint({cdn_endpoint_id: CDN_ENDPOINT_ID});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('get');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.endpoint).toBeDefined();
      const {endpoint} = response.data;
      expect(typeof endpoint.id).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
