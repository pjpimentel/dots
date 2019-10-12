import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getLoadBalancer} from './get-load-balancer';
import * as MOCK from './get-load-balancer.mock';

describe('load-balancer', () => {
  const LOAD_BALANCER_ID = MOCK.response.body.load_balancer.id;
  const URL = `/load_balancers/${LOAD_BALANCER_ID}`;
  const TOKEN = 'bearer-token';
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
  describe('get-load-balancer', () => {
    it('should be a fn', () => {
      expect(typeof getLoadBalancer).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getLoadBalancer(context)).toBe('function');
    });
    it('should return IResponse<IGetLoadBalancerApiResponse>', async () => {
      const _getLoadBalancer = getLoadBalancer(context);
      const response = await _getLoadBalancer({id: LOAD_BALANCER_ID});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('get');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.load_balancer).toBeDefined();
      const {load_balancer} = response.data;
      expect(typeof load_balancer.name).toBe('string');
      expect(typeof load_balancer.id).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
