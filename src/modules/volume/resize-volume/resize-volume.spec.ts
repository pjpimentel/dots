import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {resizeVolume} from './resize-volume';
import * as MOCK from './resize-volume.mock';

describe('volume', () => {
  const VOLUME_ID = MOCK.response.body.action.resource_id;
  const URL = `/volumes/${VOLUME_ID}/actions`;
  const TOKEN = 'bearer-token';
  const mock = new MockAdapter(axios);
  mock.onPost(URL, MOCK.request.body).reply(
    MOCK.response.headers.status,
    MOCK.response.body,
    MOCK.response.headers,
  );
  mock.onPost(URL, MOCK.request.minimumBody).reply(
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
  describe('resize-volume', () => {
    it('should be a fn', () => {
      expect(typeof resizeVolume).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof resizeVolume(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _resizeVolume = resizeVolume(context);
      const response = await _resizeVolume({
        volume_id: VOLUME_ID,
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
      expect(requestBody.type).toBe('resize');
      /// validate data
      expect(response.data).toBeDefined();
      const {action} = response.data;
      expect(typeof action.id).toBe('number');
      expect(typeof action.status).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should POST only required parameters', async () => {
      const _resizeVolume = resizeVolume(context);
      const response = await _resizeVolume({
        volume_id: VOLUME_ID,
        ...MOCK.request.minimumBody
      });
      Object.assign(response, {request: mock.history.post[0]});
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('post');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const {
        /// required
        type,
        size_gigabytes,
        /// non-required
        region,
      } = JSON.parse(request.data);
      expect(type).toBe(MOCK.request.minimumBody.type);
      expect(size_gigabytes).toBe(MOCK.request.minimumBody.size_gigabytes);
      expect(region).toBeUndefined();
    });
  });
});
