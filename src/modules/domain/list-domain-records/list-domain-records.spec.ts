import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {listDomainRecords} from './list-domain-records';
import * as MOCK from './list-domain-records.mock';

describe('domain', () => {
  const PAGE = 3;
  const PER_PAGE = 26;
  const DOMAIN_NAME = 'domain-name'
  const URL = `/domains/${DOMAIN_NAME}/records`;
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
  describe('list-domain-records', () => {
    it('should be a fn', () => {
      expect(typeof listDomainRecords).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof listDomainRecords(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _listDomainRecords = listDomainRecords(context);
      const response = await _listDomainRecords({
        domain_name: DOMAIN_NAME,
        page: PAGE,
        per_page: PER_PAGE,
      });
      Object.assign(response, { request: mock.history.get[0]});
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
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(PAGE);
      expect(request.params.per_page).toBe(PER_PAGE);
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.links).toBeDefined();
      expect(response.data.meta).toBeDefined();
      expect(response.data.domain_records).toBeDefined();
      const {domain_records} = response.data;
      const [record] = domain_records;
      expect(typeof record.name).toBe('string');
      expect(typeof record.ttl).toBe('number');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should have default parameters', async () => {
      const defaultPage = 1;
      const defaultper_page = 25;
      const _listDomainRecords = listDomainRecords(context);
      const response = await _listDomainRecords({
        domain_name: DOMAIN_NAME,
      });
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(defaultPage);
      expect(request.params.per_page).toBe(defaultper_page);
    });
  });
});
