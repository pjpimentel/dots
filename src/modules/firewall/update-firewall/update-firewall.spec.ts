import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {updateFirewall} from './update-firewall';
import * as MOCK from './update-firewall.mock';

describe('firewall', () => {
  const FIREWALL_ID = MOCK.response.body.firewall.id;
  const URL = `/firewalls/${FIREWALL_ID}`;
  const TOKEN = process.env.TEST_TOKEN as string;
  const mock = new MockAdapter(axios);
  mock.onPut(URL, MOCK.request.body).reply(
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
  describe('update-firewall', () => {
    it('should be a fn', () => {
      expect(typeof updateFirewall).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof updateFirewall(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _updateFirewall = updateFirewall(context);
      const response = await _updateFirewall({
        ...MOCK.request.body,
        id: FIREWALL_ID,
      });
      Object.assign(response, {request: mock.history.put[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('put');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      /// validate data
      expect(response.data).toBeDefined();
      const {firewall} = response.data;
      expect(typeof firewall.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
