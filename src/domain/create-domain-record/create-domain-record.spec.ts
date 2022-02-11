import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {createDomainRecord} from './create-domain-record';
import * as MOCK from './create-domain-record.mock';

describe('domain', () => {
  const DOMAIN_NAME = 'domain-name'
  const URL = `/domains/${DOMAIN_NAME}/records`;
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
  describe('create-domain-record', () => {
    it('should be a fn', () => {
      expect(typeof createDomainRecord).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof createDomainRecord(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _createDomainRecord = createDomainRecord(context);
      const response = await _createDomainRecord({
        domain_name: DOMAIN_NAME,
        ...MOCK.request.body
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
      /// validate data
      expect(response.data).toBeDefined();
      const {domain_record} = response.data;
      expect(typeof domain_record.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
