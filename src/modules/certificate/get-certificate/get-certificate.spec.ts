import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getCertificate} from './get-certificate';
import * as MOCK from './get-certificate.mock';

describe('certificate', () => {
  const CERTIFICATE_ID = MOCK.response.body.certificate.id;
  const URL = `/certificates/${CERTIFICATE_ID}`;
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
  describe('get-certificate', () => {
    it('should be a fn', () => {
      expect(typeof getCertificate).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getCertificate(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getCertificate = getCertificate(context);
      const response = await _getCertificate({certificate_id: CERTIFICATE_ID});
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
      expect(response.data.certificate).toBeDefined();
      const {certificate} = response.data;
      expect(typeof certificate.name).toBe('string');
      expect(typeof certificate.id).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
