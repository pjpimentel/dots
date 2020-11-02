import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {doActionByDropletTag} from './do-action-by-droplet-tag';
import * as MOCK from './do-action-by-droplet-tag.mock';

describe('droplet', () => {
  const URL = `/droplets/actions`;
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
  describe('do-action-by-droplet-tag', () => {
    it('should be a fn', () => {
      expect(typeof doActionByDropletTag).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof doActionByDropletTag(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const TAG_NAME = 'MY-TAG';
      const _doActionByDropletTag = doActionByDropletTag(context);
      const response = await _doActionByDropletTag({
        tag_name: TAG_NAME,
        type: MOCK.request.body.type,
      });
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
      expect(request.params).toBeDefined();
      expect(request.params.tag_name).toBe(TAG_NAME);
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      expect(requestBody.type).toBe(MOCK.request.body.type);
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.actions).toBeDefined();
      const {actions} = response.data;
      const [action] = actions;
      expect(typeof action.id).toBe('number');
      expect(typeof action.type).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
