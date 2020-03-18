import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {deleteCertificate} from './delete-certificate';
import * as MOCK from './delete-certificate.mock';

describe('certificate', () => {
  const CERTIFICATE_ID = 'my-certificate';
  const URL = `/certificates/${CERTIFICATE_ID}`;
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
  describe('delete-certificate', () => {
    it('should be a fn', () => {
      expect(typeof deleteCertificate).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof deleteCertificate(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _deleteCertificate = deleteCertificate(context);
      const response = await _deleteCertificate({
        certificate_id: CERTIFICATE_ID,
      });
      Object.assign(response, { request: mock.history.delete[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('delete');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeUndefined();
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
