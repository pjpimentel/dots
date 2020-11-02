import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getDockerCredentials} from './get-docker-credentials';
import * as MOCK from './get-docker-credentials.mock';

describe('container-registry', () => {
  const URL = `/registry/docker-credentials`;
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
  describe('get-docker-credentials', () => {
    it('should be a fn', () => {
      expect(typeof getDockerCredentials).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getDockerCredentials(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getDockerCredentials = getDockerCredentials(context);
      const response = await _getDockerCredentials({});
      Object.assign(response, { request: mock.history.get[0]});
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
      expect(request.params.read_write).toBeFalsy();
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.auths).toBeDefined();
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should set read_write to true', async () => {
      const _getDockerCredentials = getDockerCredentials(context);
      const response = await _getDockerCredentials({
        can_write: true,
      });
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params.read_write).toBe(true);
    });
  });
});
