import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {cancelAppDeployment} from './cancel-app-deployment';
import * as MOCK from './cancel-app-deployment.mock';

describe('app', () => {
  const DEPLOY_ID = 'deploy-id';
  const URL = `/apps/${MOCK.request.body.app_id}/deployments/${DEPLOY_ID}/cancel`;
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
  describe('cancel-app-deployment', () => {
    it('should be a fn', () => {
      expect(typeof cancelAppDeployment).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof cancelAppDeployment(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _cancelAppDeployment = cancelAppDeployment(context);
      const response = await _cancelAppDeployment({
        app_id: MOCK.request.body.app_id,
        deployment_id: DEPLOY_ID,
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
