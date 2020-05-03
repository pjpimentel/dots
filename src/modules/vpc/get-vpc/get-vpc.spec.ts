import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getVpc} from './get-vpc';
import * as MOCK from './get-vpc.mock';

describe('vpc', () => {
  const URL = `/vpcs/${MOCK.response.body.vpc.id}`;
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
  describe('get-vpc', () => {
    it('should be a fn', () => {
      expect(typeof getVpc).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getVpc(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getVpc = getVpc(context);
      const response = await _getVpc({
        vpc_id: MOCK.response.body.vpc.id,
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
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.vpc).toBeDefined();
      const {vpc} = response.data;
      expect(typeof vpc.id).toBe('string');
      expect(typeof vpc.name).toBe('string');
      expect(vpc.id).toBe(MOCK.response.body.vpc.id);
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
