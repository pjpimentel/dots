import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getFirewall} from './get-firewall';
import * as MOCK from './get-firewall.mock';

describe('firewall', () => {
  const FIREWALL_ID = MOCK.response.body.firewall.id;
  const URL = `/firewalls/${FIREWALL_ID}`;
  const TOKEN = process.env.TEST_TOKEN as string;
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
  describe('get-firewall', () => {
    it('should be a fn', () => {
      expect(typeof getFirewall).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getFirewall(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getFirewall = getFirewall(context);
      const response = await _getFirewall({firewall_id: FIREWALL_ID});
      Object.assign(response, { request: mock.history.get[0]});
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
      expect(response.data.firewall).toBeDefined();
      const {firewall} = response.data;
      expect(typeof firewall.name).toBe('string');
      expect(typeof firewall.id).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
