import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {assignIpToDroplet} from './assign-ip-to-droplet';
import * as MOCK from './assign-ip-to-droplet.mock';

describe('floating-ip', () => {
  const IP_ADDRESS = 'ip-address';
  const URL = `/floating_ips/${IP_ADDRESS}/actions`;
  const TOKEN = process.env.TEST_TOKEN as string;
  const mock = new MockAdapter(axios);
  mock.onPost(URL, MOCK.request.body).reply(
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
  describe('assign-ip-to-droplet', () => {
    it('should be a fn', () => {
      expect(typeof assignIpToDroplet).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof assignIpToDroplet(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _assignIpToDroplet = assignIpToDroplet(context);
      const response = await _assignIpToDroplet({
        droplet_id: MOCK.request.body.droplet_id,
        ip: IP_ADDRESS,
      });
      Object.assign(response, {request: mock.history.post[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
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
      expect(requestBody.type).toBe('assign');
      /// validate data
      expect(response.data).toBeDefined();
      const {action} = response.data;
      expect(typeof action.id).toBe('number');
      expect(typeof action.status).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
