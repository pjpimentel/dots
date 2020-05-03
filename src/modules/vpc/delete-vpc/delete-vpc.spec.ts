import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {deleteVpc} from './delete-vpc';
import * as MOCK from './delete-vpc.mock';

describe('vpc', () => {
  const VPC_ID = 'my-vpc';
  const URL = `/vpcs/${VPC_ID}`;
  const TOKEN = 'bearer-token';
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
  describe('delete-vpc', () => {
    it('should be a fn', () => {
      expect(typeof deleteVpc).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof deleteVpc(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _deleteVpc = deleteVpc(context);
      const response = await _deleteVpc({vpc_id: VPC_ID});
      Object.assign(response, { request: mock.history.delete[0]});
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
