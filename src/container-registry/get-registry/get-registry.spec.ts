import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {getRegistry} from './get-registry';
import * as MOCK from './get-registry.mock';

describe('container-registry', () => {
  const URL = `/registry`;
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
  describe('get-registry', () => {
    it('should be a fn', () => {
      expect(typeof getRegistry).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getRegistry(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getRegistry = getRegistry(context);
      const response = await _getRegistry();
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
      expect(response.data.registry).toBeDefined();
      const {registry} = response.data;
      expect(typeof registry.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
