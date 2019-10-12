import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {deleteDomainRecord} from './delete-domain-record';
import * as MOCK from './delete-domain-record.mock';

describe('domain', () => {
  const DOMAIN_NAME = 'domain-name';
  const DOMAIN_RECORD_ID = Math.floor(Math.random() * 1000) + 1;
  const URL = `/domains/${DOMAIN_NAME}/records/${DOMAIN_RECORD_ID}`;
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
  describe('get-domain-record', () => {
    it('should be a fn', () => {
      expect(typeof deleteDomainRecord).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof deleteDomainRecord(context)).toBe('function');
    });
    it('should return IResponse<IGetDomainApiResponse>', async () => {
      const _deleteDomainRecord = deleteDomainRecord(context);
      const response = await _deleteDomainRecord({
        domain_name: DOMAIN_NAME,
        domain_record_id: DOMAIN_RECORD_ID,
      });
      Object.assign(response, { request: mock.history.delete[0]});
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
      /// validate data
      expect(response.data).toBeUndefined();
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
