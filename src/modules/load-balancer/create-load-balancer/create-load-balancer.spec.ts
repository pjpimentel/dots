import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {createLoadBalancer} from './create-load-balancer';
import * as MOCK from './create-load-balancer.mock';

describe('load-balancer', () => {
  const URL = '/load_balancers';
  const TOKEN = 'bearer-token';
  const mock = new MockAdapter(axios);
  mock.onPost(URL, MOCK.request.body).reply(
    MOCK.response.headers.status,
    MOCK.response.body,
    MOCK.response.headers,
  );
  mock.onPost(URL, MOCK.request.minimumBody).reply(
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
  describe('create-load-balancer', () => {
    it('should be a fn', () => {
      expect(typeof createLoadBalancer).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof createLoadBalancer(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _createLoadBalancer = createLoadBalancer(context);
      const response = await _createLoadBalancer(MOCK.request.body);
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
      expect(requestBody).toMatchObject(MOCK.request.body);
      /// validate data
      expect(response.data).toBeDefined();
      const {load_balancer} = response.data;
      expect(typeof load_balancer.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should POST only required parameters', async () => {
      const _createLoadBalancer = createLoadBalancer(context);
      const response = await _createLoadBalancer(MOCK.request.minimumBody);
      Object.assign(response, {request: mock.history.post[0]});
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('post');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const {
        /// required
        name,
        region,
        forwarding_rules,
        /// non-required
        droplet_idsregion,
        enable_proxy_protocolregion,
        health_checkregion,
        redirect_http_to_httpsregion,
        algorithmregion,
        sticky_sessionsregion,
      } = JSON.parse(request.data);
      expect(name).toBe(MOCK.request.minimumBody.name);
      expect(region).toBe(MOCK.request.minimumBody.region);
      expect(forwarding_rules).toStrictEqual(MOCK.request.minimumBody.forwarding_rules);
      expect(droplet_idsregion).toBeUndefined();
      expect(enable_proxy_protocolregion).toBeUndefined();
      expect(health_checkregion).toBeUndefined();
      expect(redirect_http_to_httpsregion).toBeUndefined();
      expect(algorithmregion).toBeUndefined();
      expect(sticky_sessionsregion).toBeUndefined();
    });
  });
});
