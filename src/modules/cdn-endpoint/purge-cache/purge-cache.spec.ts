import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {purgeCache} from './purge-cache';
import * as MOCK from './purge-cache.mock';

describe('cdn-endpoint', () => {
  const CDN_ENDPOINT_ID = 'my-id';
  const URL = `/cdn/endpoints/${CDN_ENDPOINT_ID}/cache`;
  const TOKEN = process.env.TEST_TOKEN as string;
  const mock = new MockAdapter(axios);
  mock.onDelete(URL, MOCK.request.body).reply(
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
  describe('purge-cache', () => {
    it('should be a fn', () => {
      expect(typeof purgeCache).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof purgeCache(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _purgeCache = purgeCache(context);
      const response = await _purgeCache({
        ...MOCK.request.body,
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
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('delete');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
