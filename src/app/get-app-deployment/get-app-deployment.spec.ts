import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {getAppDeployment} from './get-app-deployment';
import * as MOCK from './get-app-deployment.mock';

describe('app', () => {
  const APP_ID = 'app-id'
  const URL = `/apps/${APP_ID}/deployments/${MOCK.response.body.deployment.id}`;
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
  describe('get-app-deployment', () => {
    it('should be a fn', () => {
      expect(typeof getAppDeployment).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getAppDeployment(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getAppDeployment = getAppDeployment(context);
      const response = await _getAppDeployment({
        app_id: APP_ID,
        deployment_id: MOCK.response.body.deployment.id,
      });
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
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.deployment).toBeDefined();
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
