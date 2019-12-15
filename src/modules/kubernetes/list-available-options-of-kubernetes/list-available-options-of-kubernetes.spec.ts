import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {listAvailableOptionsOfKubernetes} from './list-available-options-of-kubernetes';
import * as MOCK from './list-available-options-of-kubernetes.mock';

describe('kubernetes', () => {
  const URL = `/kubernetes/clusters/options`;
  const TOKEN = 'bearer-token';
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
  describe('list-available-options-of-kubernetes', () => {
    it('should be a fn', () => {
      expect(typeof listAvailableOptionsOfKubernetes).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof listAvailableOptionsOfKubernetes(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _listAvailableOptionsOfKubernetes = listAvailableOptionsOfKubernetes(context);
      const response = await _listAvailableOptionsOfKubernetes();
      Object.assign(response, {request: mock.history.get[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('get');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      /// validate data
      expect(response.data).toBeDefined();
      const {options:{regions, sizes, versions}} = response.data;
      expect(Array.isArray(regions)).toBe(true);
      expect(Array.isArray(sizes)).toBe(true);
      expect(Array.isArray(versions)).toBe(true);
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
