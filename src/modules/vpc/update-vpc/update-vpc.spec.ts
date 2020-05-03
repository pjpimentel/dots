import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {updateVpc} from './update-vpc';
import * as MOCK from './update-vpc.mock';

describe('vpc', () => {
  const VPC_ID = MOCK.response.body.vpc.id;
  const URL = `/vpcs/${VPC_ID}`;
  const TOKEN = 'bearer-token';
  const mock = new MockAdapter(axios);
  mock.onPatch(URL, MOCK.request.body).reply(
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
  describe('update-vpc', () => {
    it('should be a fn', () => {
      expect(typeof updateVpc).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof updateVpc(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _updateVpc = updateVpc(context);
      const response = await _updateVpc({
        ...MOCK.request.body,
        vpc_id: VPC_ID,
      });
      Object.assign(response, {request: mock.history.patch[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('patch');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      /// validate data
      expect(response.data).toBeDefined();
      const {vpc} = response.data;
      expect(typeof vpc.name).toBe('string');
      expect(typeof vpc.id).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
