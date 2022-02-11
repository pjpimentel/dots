import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {getTag} from './get-tag';
import * as MOCK from './get-tag.mock';

describe('tag', () => {
  const TAG_NAME = MOCK.response.body.tag.name;
  const URL = `/tags/${TAG_NAME}`;
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
  describe('get-sshKey', () => {
    it('should be a fn', () => {
      expect(typeof getTag).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getTag(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getTag = getTag(context);
      const response = await _getTag({tag_name: TAG_NAME});
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
      expect(response.data.tag).toBeDefined();
      const {tag} = response.data;
      expect(typeof tag.name).toBe('string');
      expect(typeof tag.resources.count).toBe('number');
      expect(typeof tag.resources.droplets.count).toBe('number');
      expect(typeof tag.resources.droplets.last_tagged_uri).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
