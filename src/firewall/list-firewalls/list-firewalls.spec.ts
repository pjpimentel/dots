import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {listFirewalls} from './list-firewalls';
import * as MOCK from './list-firewalls.mock';

describe('firewall', () => {
  const PAGE = 3;
  const PER_PAGE = 26;
  const URL = '/firewalls';
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
  describe('list-firewalls', () => {
    it('should be a fn', () => {
      expect(typeof listFirewalls).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof listFirewalls(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _listFirewalls = listFirewalls(context);
      const response = await _listFirewalls({page: PAGE, per_page: PER_PAGE});
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
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(PAGE);
      expect(request.params.per_page).toBe(PER_PAGE);
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.links).toBeDefined();
      expect(response.data.meta).toBeDefined();
      expect(response.data.firewalls).toBeDefined();
      const {firewalls} = response.data;
      const [firewall] = firewalls;
      expect(typeof firewall.id).toBe('string');
      expect(typeof firewall.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should have default parameters', async () => {
      const defaultPage = 1;
      const defaultper_page = 25;
      const _listFirewalls = listFirewalls(context);
      const response = await _listFirewalls({});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(defaultPage);
      expect(request.params.per_page).toBe(defaultper_page);
    });
  });
});
