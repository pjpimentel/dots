import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {createTag} from './create-tag';
import * as MOCK from './create-tag.mock';

describe('tag', () => {
  const URL = '/tags';
  const TOKEN = process.env.TEST_TOKEN as string;
  const mock = new MockAdapter(axios);
  mock.onPost(URL, MOCK.request.body).reply(
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
  describe('create-tag', () => {
    it('should be a fn', () => {
      expect(typeof createTag).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof createTag(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _createTag = createTag(context);
      const response = await _createTag(MOCK.request.body);
      Object.assign(response, {request: mock.history.post[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('post');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      /// validate data
      expect(response.data).toBeDefined();
      const {tag} = response.data;
      expect(typeof tag.name).toBe('string');
      expect(typeof tag.resources.count).toBe('number');
      expect(typeof tag.resources.droplets.count).toBe('number');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
