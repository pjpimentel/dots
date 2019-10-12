import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {removeDropletsFromLoadBalancer} from './remove-droplets-from-load-balancer';
import * as MOCK from './remove-droplets-from-load-balancer.mock';

describe('load-balancer', () => {
  const LOAD_BALANCER_ID = 'load-balancer-id';
  const URL = `/load_balancers/${LOAD_BALANCER_ID}/droplets`;
  const TOKEN = 'bearer-token';
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
  describe('remove-droplets-from-load-balancer', () => {
    it('should be a fn', () => {
      expect(typeof removeDropletsFromLoadBalancer).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof removeDropletsFromLoadBalancer(context)).toBe('function');
    });
    it('should return IResponse<IRemoveDropletsToLoadBalancerApiResponse>', async () => {
      const _removeDropletsFromLoadBalancer = removeDropletsFromLoadBalancer(context);
      const response = await _removeDropletsFromLoadBalancer({
        ...MOCK.request.body,
        id: LOAD_BALANCER_ID,
      });
      Object.assign(response, {request: mock.history.delete[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
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