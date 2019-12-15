import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {deleteCdnEndpoint} from './delete-cdn-endpoint';
import * as MOCK from './delete-cdn-endpoint.mock';

describe('cdn-endpoint', () => {
  const CDN_ENDPOINT_ID = 'my-id';
  const URL = `/cdn/endpoints/${CDN_ENDPOINT_ID}`;
  const TOKEN = 'bearer-token';
  const mock = new MockAdapter(axios);
  mock.onDelete(URL).reply(
    MOCK.response.headers.status,
    undefined,
    MOCK.response.headers,
  );
  const context = createContext({
    axios,
    token: TOKEN,
  });
  beforeEach(() => {
    mock.resetHistory();
  });
  describe('delete-cdn-endpoint', () => {
    it('should be a fn', () => {
      expect(typeof deleteCdnEndpoint).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof deleteCdnEndpoint(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _deleteCdnEndpoint = deleteCdnEndpoint(context);
      const response = await _deleteCdnEndpoint({
        cdn_endpoint_id: CDN_ENDPOINT_ID,
      });
      Object.assign(response, { request: mock.history.delete[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('delete');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeUndefined();
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
