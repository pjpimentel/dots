import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {removeRulesFromLoadBalancer} from './remove-rules-from-load-balancer';
import * as MOCK from './remove-rules-from-load-balancer.mock';

describe('load-balancer', () => {
  const LOAD_BALANCER_ID = 'load-balancer-id';
  const URL = `/load_balancers/${LOAD_BALANCER_ID}/forwarding_rules`;
  const TOKEN = process.env.TEST_TOKEN as string;
  const mock = new MockAdapter(axios);
  mock.onDelete(URL, MOCK.request.body).reply(
    MOCK.response.headers.status,
    undefined,
    MOCK.response.headers,
  );
  const context = createContext({
    axios,
    token: TOKEN,
  });
  beforeEach(() => {
    mock.resetHistory();
  });
  describe('remove-rules-from-load-balancer', () => {
    it('should be a fn', () => {
      expect(typeof removeRulesFromLoadBalancer).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof removeRulesFromLoadBalancer(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _removeRulesFromLoadBalancer = removeRulesFromLoadBalancer(context);
      const response = await _removeRulesFromLoadBalancer({
        ...MOCK.request.body,
        load_balancer_id: LOAD_BALANCER_ID,
      });
      Object.assign(response, {request: mock.history.delete[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('delete');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      /// validate data
      expect(response.data).toBeUndefined();
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
