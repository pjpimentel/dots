import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getSshKey} from './get-ssh-key';
import * as MOCK from './get-ssh-key.mock';

describe('ssh-key', () => {
  const KEY_ID = MOCK.response.body.ssh_key.id;
  const URL = `/account/keys/${KEY_ID}`;
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
  describe('get-sshKey', () => {
    it('should be a fn', () => {
      expect(typeof getSshKey).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getSshKey(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getSshKey = getSshKey(context);
      const response = await _getSshKey({ssh_key_id: KEY_ID});
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
      expect(response.data.ssh_key).toBeDefined();
      const {ssh_key} = response.data;
      expect(typeof ssh_key.name).toBe('string');
      expect(typeof ssh_key.id).toBe('number');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
