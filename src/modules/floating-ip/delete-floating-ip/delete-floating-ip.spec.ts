import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {deleteFloatingIp} from './delete-floating-ip';
import * as MOCK from './delete-floating-ip.mock';

describe('floatingIp', () => {
  const IP_ADDRESS = 'my-floating-ip';
  const URL = `/floating_ips/${IP_ADDRESS}`;
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
  describe('delete-floating-ip', () => {
    it('should be a fn', () => {
      expect(typeof deleteFloatingIp).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof deleteFloatingIp(context)).toBe('function');
    });
    it('should return IResponse<void>', async () => {
      const _deleteFloatingIp = deleteFloatingIp(context);
      const response = await _deleteFloatingIp({ip: IP_ADDRESS});
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
      expect(request.data).toBeUndefined();
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});