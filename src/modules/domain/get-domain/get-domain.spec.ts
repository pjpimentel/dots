import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getDomain} from './get-domain';
import * as MOCK from './get-domain.mock';

describe('domain', () => {
  const DOMAIN_NAME = MOCK.response.body.domain.name;
  const URL = `/domains/${DOMAIN_NAME}`;
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
  describe('get-domain', () => {
    it('should be a fn', () => {
      expect(typeof getDomain).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getDomain(context)).toBe('function');
    });
    it('should return IResponse<IGetDomainApiResponse>', async () => {
      const _getDomain = getDomain(context);
      const response = await _getDomain({name: DOMAIN_NAME});
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
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.domain).toBeDefined();
      const {domain} = response.data;
      expect(typeof domain.name).toBe('string');
      expect(typeof domain.ttl).toBe('number');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
