import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {updateLoadBalancer} from './update-load-balancer';
import * as MOCK from './update-load-balancer.mock';

describe('load-balancer', () => {
  const LOAD_BALANCER_ID = MOCK.response.body.load_balancer.id;
  const URL = `/load_balancers/${LOAD_BALANCER_ID}`;
  const TOKEN = 'bearer-token';
  const mock = new MockAdapter(axios);
  mock.onPut(URL, MOCK.request.body).reply(
    MOCK.response.headers.status,
    MOCK.response.body,
    MOCK.response.headers,
  );
  mock.onPut(URL, MOCK.request.minimumBody).reply(
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
  describe('update-load-balancer', () => {
    it('should be a fn', () => {
      expect(typeof updateLoadBalancer).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof updateLoadBalancer(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _updateLoadBalancer = updateLoadBalancer(context);
      const response = await _updateLoadBalancer({
        ...MOCK.request.body,
        load_balancer_id: LOAD_BALANCER_ID,
      });
      Object.assign(response, {request: mock.history.put[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('put');
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
      const _updateLoadBalancer = updateLoadBalancer(context);
      const response = await _updateLoadBalancer({
        ...MOCK.request.minimumBody,
        load_balancer_id: LOAD_BALANCER_ID,
      });
      Object.assign(response, {request: mock.history.put[0]});
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('put');
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
    /// this test can be removed after id field remove
    it('should POST only required parameters (deprecated)', async () => {
      const _updateLoadBalancer = updateLoadBalancer(context);
      const response = await _updateLoadBalancer({
        ...MOCK.request.minimumBody,
        id: LOAD_BALANCER_ID,
      } as any);
      Object.assign(response, {request: mock.history.put[0]});
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('put');
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
