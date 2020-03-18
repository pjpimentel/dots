import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {updateSshKey} from './update-ssh-key';
import * as MOCK from './update-ssh-key.mock';

describe('ssh-key', () => {
  const URL = `/account/keys/${MOCK.response.body.ssh_key.id}`;
  const TOKEN = 'bearer-token';
  const mock = new MockAdapter(axios);
  mock.onPut(URL, MOCK.request.body).reply(
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
  describe('update-ssh-key', () => {
    it('should be a fn', () => {
      expect(typeof updateSshKey).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof updateSshKey(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _updateSshKey = updateSshKey(context);
      const response = await _updateSshKey({
        ...MOCK.request.body,
        ssh_key_id: MOCK.response.body.ssh_key.id,
      });
      Object.assign(response, {request: mock.history.put[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('put');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      /// validate data
      expect(response.data).toBeDefined();
      const {ssh_key} = response.data;
      expect(typeof ssh_key.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    /// this test can be removed after id field remove
    it('should return a valid response (deprecated)', async () => {
      const _updateSshKey = updateSshKey(context);
      const response = await _updateSshKey({
        ...MOCK.request.body,
        id: MOCK.response.body.ssh_key.id,
      } as any);
      Object.assign(response, {request: mock.history.put[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('put');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      /// validate data
      expect(response.data).toBeDefined();
      const {ssh_key} = response.data;
      expect(typeof ssh_key.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
