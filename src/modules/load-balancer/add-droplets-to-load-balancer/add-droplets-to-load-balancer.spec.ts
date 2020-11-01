import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {addDropletsToLoadBalancer} from './add-droplets-to-load-balancer';
import * as MOCK from './add-droplets-to-load-balancer.mock';

describe('load-balancer', () => {
  const LOAD_BALANCER_ID = 'load-balancer-id';
  const URL = `/load_balancers/${LOAD_BALANCER_ID}/droplets`;
  const TOKEN = 'bearer-token';
  const mock = new MockAdapter(axios);
  mock.onPost(URL, MOCK.request.body).reply(
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
  describe('add-droplets-to-load-balancer', () => {
    it('should be a fn', () => {
      expect(typeof addDropletsToLoadBalancer).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof addDropletsToLoadBalancer(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _addDropletsToLoadBalancer = addDropletsToLoadBalancer(context);
      const response = await _addDropletsToLoadBalancer({
        ...MOCK.request.body,
        load_balancer_id: LOAD_BALANCER_ID,
      });
      Object.assign(response, {request: mock.history.post[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
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
      expect(response.data).toBeUndefined();
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
