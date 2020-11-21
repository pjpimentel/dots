import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getAggregatedAppDeploymentLogs} from './get-aggregated-app-deployment-logs';
import * as MOCK from './get-aggregated-app-deployment-logs.mock';

describe('app', () => {
  const APP_ID = 'app-id';
  const DEPLOY_ID = 'deploy-id';
  const URL = `/apps/${APP_ID}/deployments/${DEPLOY_ID}/logs`;
  const TOKEN = process.env.TEST_TOKEN as string;
  const mock = new MockAdapter(axios);
  const params = {
    component_name: 'comp-name',
    follow: false,
    pod_connection_timeout: '1m',
    type: 'BUILD',
  };
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
  describe('get-aggregated-app-deployment-logs', () => {
    it('should be a fn', () => {
      expect(typeof getAggregatedAppDeploymentLogs).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getAggregatedAppDeploymentLogs(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getAggregatedAppDeploymentLogs = getAggregatedAppDeploymentLogs(context);
      const response = await _getAggregatedAppDeploymentLogs({
        app_id: APP_ID,
        deployment_id: DEPLOY_ID,
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
      expect(response.data.live_url).toBeDefined();
      expect(typeof response.data.live_url).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should set query params', async () => {
      const _getAggregatedAppDeploymentLogs = getAggregatedAppDeploymentLogs(context);
      const response = await _getAggregatedAppDeploymentLogs({
        app_id: APP_ID,
        deployment_id: DEPLOY_ID,
        ...params,
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
      expect(request.params).toMatchObject(params);
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.live_url).toBeDefined();
      expect(typeof response.data.live_url).toBe('string');
    });
  });
});
