import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import { deleteDropletByTag } from './delete-droplet-by-tag';
import * as MOCK from './delete-droplet-by-tag.mock';

describe('droplet', () => {
  const TAG_NAME = "tagName";
  const URL = `/droplets?tag_name=${TAG_NAME}`;
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
  describe('delete-droplet-by-tag', () => {
    it('should be a fn', () => {
      expect(typeof deleteDropletByTag).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof deleteDropletByTag(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _deleteDropletByTag = deleteDropletByTag(context);
      const response = await _deleteDropletByTag({ tag_name: TAG_NAME });
      Object.assign(response, { request: mock.history.delete[0] });
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const { request } = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('delete');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeUndefined();
      /// validate headers
      const { headers, status } = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});