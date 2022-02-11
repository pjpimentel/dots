import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import { deleteDropletsByTag } from './delete-droplets-by-tag';
import * as MOCK from './delete-droplets-by-tag.mock';

describe('droplet', () => {
  const TAG_NAME = "tagName";
  const URL = `/droplets`;
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
  describe('delete-droplets-by-tag', () => {
    it('should be a fn', () => {
      expect(typeof deleteDropletsByTag).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof deleteDropletsByTag(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _deleteDropletsByTag = deleteDropletsByTag(context);
      const response = await _deleteDropletsByTag({ tag_name: TAG_NAME });
      Object.assign(response, { request: mock.history.delete[0] });
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const { request } = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('delete');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.params).toBeDefined();
      expect(request.params.tag_name).toBe(TAG_NAME);
      expect(request.data).toBeUndefined();
      /// validate headers
      const { headers, status } = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
