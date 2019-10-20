import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {deleteDomain} from './delete-domain';
import * as MOCK from './delete-domain.mock';

describe('domain', () => {
  const DOMAIN_NAME = 'my-domain';
  const URL = `/domains/${DOMAIN_NAME}`;
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
  describe('delete-domain', () => {
    it('should be a fn', () => {
      expect(typeof deleteDomain).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof deleteDomain(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _deleteDomain = deleteDomain(context);
      const response = await _deleteDomain({name: DOMAIN_NAME});
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
      expect(request.data).toBeUndefined();
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
