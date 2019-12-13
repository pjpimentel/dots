import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {assignResourcesToDefaultProject} from './assign-resources-to-default-project';
import * as MOCK from './assign-resources-to-default-project.mock';

describe('project', () => {
  const PROJECT_ID = 'default';
  const URL = `/projects/${PROJECT_ID}/resources`;
  const TOKEN = 'bearer-token';
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
  describe('assign-resources-to-default-project', () => {
    it('should be a fn', () => {
      expect(typeof assignResourcesToDefaultProject).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof assignResourcesToDefaultProject(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _assignResourcesToDefaultProject = assignResourcesToDefaultProject(context);
      const response = await _assignResourcesToDefaultProject(MOCK.request.body);
      Object.assign(response, {request: mock.history.post[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('post');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.links).toBeDefined();
      expect(response.data.meta).toBeDefined();
      expect(response.data.resources).toBeDefined();
      const {resources} = response.data;
      const [resource] = resources;
      expect(typeof resource.urn).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
