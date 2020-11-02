import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {updateDefaultProject} from './update-default-project';
import * as MOCK from './update-default-project.mock';

describe('project', () => {
  const PROJECT_ID = 'default';
  const URL = `/projects/${PROJECT_ID}`;
  const TOKEN = process.env.TEST_TOKEN as string;
  const mock = new MockAdapter(axios);
  mock.onPut(URL, MOCK.request.body).reply(
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
  describe('update-default-project', () => {
    it('should be a fn', () => {
      expect(typeof updateDefaultProject).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof updateDefaultProject(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _updateDefaultProject = updateDefaultProject(context);
      const response = await _updateDefaultProject(MOCK.request.body);
      Object.assign(response, {request: mock.history.put[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('put');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      /// validate data
      expect(response.data).toBeDefined();
      const {project} = response.data;
      expect(typeof project.name).toBe('string');
      expect(typeof project.id).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
