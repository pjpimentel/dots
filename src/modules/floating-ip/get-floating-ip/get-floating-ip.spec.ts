import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getFloatingIp} from './get-floating-ip';
import * as MOCK from './get-floating-ip.mock';

describe('floating-ip', () => {
  const URL = `/floating_ips/${MOCK.response.body.floating_ip.ip}`;
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
  describe('get-floating-ip', () => {
    it('should be a fn', () => {
      expect(typeof getFloatingIp).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getFloatingIp(context)).toBe('function');
    });
    it('should return IResponse<IGetFloatingIpApiResponse>', async () => {
      const _getFloatingIp = getFloatingIp(context);
      const response = await _getFloatingIp({
        ip: MOCK.response.body.floating_ip.ip
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
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('get');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.floating_ip).toBeDefined();
      const {floating_ip} = response.data;
      expect(typeof floating_ip.ip).toBe('string');
      expect(floating_ip.ip).toBe(MOCK.response.body.floating_ip.ip);
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});