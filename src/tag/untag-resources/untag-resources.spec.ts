import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {untagResources} from './untag-resources';
import * as MOCK from './untag-resources.mock';

describe('tag', () => {
  const TAG_NAME = 'tag-name';
  const URL = `/tags/${TAG_NAME}/resources`;
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
  describe('untag-resources', () => {
    it('should be a fn', () => {
      expect(typeof untagResources).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof untagResources(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _untagResources = untagResources(context);
      const response = await _untagResources({
        ...MOCK.request.body,
        tag_name: TAG_NAME,
      });
      Object.assign(response, {request: mock.history.delete[0]});
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
      /// validate data
      expect(response.data).toBeUndefined();
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
