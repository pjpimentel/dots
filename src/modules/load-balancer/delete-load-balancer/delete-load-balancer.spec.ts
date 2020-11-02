import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {deleteLoadBalancer} from './delete-load-balancer';
import * as MOCK from './delete-load-balancer.mock';

describe('load-balancer', () => {
  const LOAD_BALANCER_ID = 'my-loadBalancer-id';
  const URL = `/load_balancers/${LOAD_BALANCER_ID}`;
  const TOKEN = process.env.TEST_TOKEN as string;
  const mock = new MockAdapter(axios);
  mock.onDelete(URL).reply(
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
  describe('delete-load-balancer', () => {
    it('should be a fn', () => {
      expect(typeof deleteLoadBalancer).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof deleteLoadBalancer(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _deleteLoadBalancer = deleteLoadBalancer(context);
      const response = await _deleteLoadBalancer({
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
      expect(request.data).toBeUndefined();
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
