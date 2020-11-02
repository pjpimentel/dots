import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {createFloatingIp} from './create-floating-ip';
import * as MOCK from './create-floating-ip.mock';

describe('floating-ip', () => {
  const URL = '/floating_ips';
  const TOKEN = process.env.TEST_TOKEN as string;
  const mock = new MockAdapter(axios);
  mock.onPost(URL, MOCK.request.bodyByDropletId).reply(
    MOCK.response.headers.status,
    MOCK.response.body,
    MOCK.response.headers,
  );
  mock.onPost(URL, MOCK.request.bodyByRegion).reply(
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
  describe('create-floating-ip', () => {
    it('should be a fn', () => {
      expect(typeof createFloatingIp).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof createFloatingIp(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _createFloatingIp = createFloatingIp(context);
      const response = await _createFloatingIp(MOCK.request.bodyByDropletId);
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
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.bodyByDropletId);
      /// validate data
      expect(response.data).toBeDefined();
      const {floating_ip} = response.data;
      expect(typeof floating_ip.ip).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });

    it('should return a valid response', async () => {
      const _createFloatingIp = createFloatingIp(context);
      const response = await _createFloatingIp(MOCK.request.bodyByRegion);
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
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.bodyByRegion);
      /// validate data
      expect(response.data).toBeDefined();
      const {floating_ip} = response.data;
      expect(typeof floating_ip.ip).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
