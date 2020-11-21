import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {createAppDeployment} from './create-app-deployment';
import * as MOCK from './create-app-deployment.mock';

describe('app', () => {
  const URL = `/apps/${MOCK.request.body.app_id}/deployments`;
  const TOKEN = process.env.TEST_TOKEN as string;
  const mock = new MockAdapter(axios);
  mock.onPost(URL, undefined).reply(
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
  describe('create-app-deployment', () => {
    it('should be a fn', () => {
      expect(typeof createAppDeployment).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof createAppDeployment(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _createAppDeployment = createAppDeployment(context);
      const response = await _createAppDeployment(MOCK.request.body);
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
      /// validate data
      expect(response.data).toBeDefined();
      const {deployment} = response.data;
      expect(typeof deployment.id).toBe('string');
      expect(typeof deployment.spec.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
