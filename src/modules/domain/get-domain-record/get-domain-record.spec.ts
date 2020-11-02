import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getDomainRecord} from './get-domain-record';
import * as MOCK from './get-domain-record.mock';

describe('domain', () => {
  const DOMAIN_NAME = 'domain-name';
  const DOMAIN_RECORD_ID = MOCK.response.body.domain_record.id;
  const URL = `/domains/${DOMAIN_NAME}/records/${DOMAIN_RECORD_ID}`;
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
  describe('get-domain-record', () => {
    it('should be a fn', () => {
      expect(typeof getDomainRecord).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getDomainRecord(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getDomainRecord = getDomainRecord(context);
      const response = await _getDomainRecord({
        domain_name: DOMAIN_NAME,
        domain_record_id: DOMAIN_RECORD_ID,
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
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('get');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.domain_record).toBeDefined();
      const {domain_record} = response.data;
      expect(typeof domain_record.name).toBe('string');
      expect(typeof domain_record.ttl).toBe('number');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
