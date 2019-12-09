import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getVolume} from './get-volume';
import * as MOCK from './get-volume.mock';

describe('volume', () => {
  const URL = `/volumes/${MOCK.response.body.volume.id}`;
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
  describe('get-volume', () => {
    it('should be a fn', () => {
      expect(typeof getVolume).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getVolume(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getVolume = getVolume(context);
      const response = await _getVolume({
        volume_id: MOCK.response.body.volume.id,
      });
      Object.assign(response, {request: mock.history.get[0]});
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
      expect(response.data.volume).toBeDefined();
      const {volume} = response.data;
      expect(typeof volume.id).toBe('string');
      expect(typeof volume.name).toBe('string');
      expect(volume.id).toBe(MOCK.response.body.volume.id);
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    /// this test can be removed after id field remove
    it('should return a valid response (deprecated)', async () => {
      const _getVolume = getVolume(context);
      const response = await _getVolume({id: MOCK.response.body.volume.id} as any);
      Object.assign(response, {request: mock.history.get[0]});
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
      expect(response.data.volume).toBeDefined();
      const {volume} = response.data;
      expect(typeof volume.id).toBe('string');
      expect(typeof volume.name).toBe('string');
      expect(volume.id).toBe(MOCK.response.body.volume.id);
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
