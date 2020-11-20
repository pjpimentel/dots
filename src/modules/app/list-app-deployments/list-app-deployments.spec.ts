import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {ListAppDeployments} from './list-app-deployments';
import * as MOCK from './list-app-deployments.mock';

describe('app', () => {
  const PAGE = 3;
  const PER_PAGE = 26;
  const URL = `/apps/${MOCK.response.body.deployments[0].id}/deployments`;
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
  describe('list-app-deployments', () => {
    it('should be a fn', () => {
      expect(typeof ListAppDeployments).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof ListAppDeployments(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _ListAppDeployments = ListAppDeployments(context);
      const response = await _ListAppDeployments({
        app_id: MOCK.response.body.deployments[0].id,
        page: PAGE,
        per_page: PER_PAGE,
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
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(PAGE);
      expect(request.params.per_page).toBe(PER_PAGE);
      expect(request.params.resource_type).toBeUndefined();
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.deployments).toBeDefined();
      const {deployments} = response.data;
      const [deployment] = deployments;
      expect(typeof deployment.id).toBe('string');
      expect(typeof deployment.spec.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should have default parameters', async () => {
      const defaultPage = 1;
      const defaultper_page = 25;
      const _ListAppDeployments = ListAppDeployments(context);
      const response = await _ListAppDeployments({
        app_id: MOCK.response.body.deployments[0].id,
      });
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(defaultPage);
      expect(request.params.per_page).toBe(defaultper_page);
    });
  });
});
