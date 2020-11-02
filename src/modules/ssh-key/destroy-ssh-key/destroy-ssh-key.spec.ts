import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {destroySshKey} from './destroy-ssh-key';
import * as MOCK from './destroy-ssh-key.mock';

describe('ssh-key', () => {
  const KEY_ID = 'key-id';
  const URL = `/account/keys/${KEY_ID}`;
  const TOKEN = process.env.TEST_TOKEN as string;
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
  describe('destroy-ssh-key', () => {
    it('should be a fn', () => {
      expect(typeof destroySshKey).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof destroySshKey(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _destroySshKey = destroySshKey(context);
      const response = await _destroySshKey({ssh_key_id: KEY_ID});
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
