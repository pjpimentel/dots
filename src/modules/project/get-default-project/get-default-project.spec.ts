import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getDefaultProject} from './get-default-project';
import * as MOCK from './get-default-project.mock';

describe('project', () => {
  const URL = `/projects/default`;
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
  describe('get-project', () => {
    it('should be a fn', () => {
      expect(typeof getDefaultProject).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getDefaultProject(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getDefaultProject = getDefaultProject(context);
      const response = await _getDefaultProject();
      Object.assign(response, {request: mock.history.get[0]});
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
      expect(request.data).toBeUndefined();
      /// validate data
      expect(response.data).toBeDefined();
      const {project} = response.data;
      expect(typeof project.name).toBe('string');
      expect(typeof project.id).toBe('string');
      expect(project.is_default).toBe(true);
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
