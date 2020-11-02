import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {deleteTag} from './delete-tag';
import * as MOCK from './delete-tag.mock';

describe('tag', () => {
  const TAG_NAME = 'my-tag';
  const URL = `/tags/${TAG_NAME}`;
  const TOKEN = process.env.TEST_TOKEN as string;
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
  describe('delete-tag', () => {
    it('should be a fn', () => {
      expect(typeof deleteTag).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof deleteTag(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _deleteTag = deleteTag(context);
      const response = await _deleteTag({tag_name: TAG_NAME});
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
      expect(request.data).toBeUndefined();
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
