import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {createVolume} from './create-volume';
import * as MOCK from './create-volume.mock';

describe('volume', () => {
  const URL = '/volumes';
  const TOKEN = process.env.TEST_TOKEN as string;
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
  describe('create-volume', () => {
    it('should be a fn', () => {
      expect(typeof createVolume).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof createVolume(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _createVolume = createVolume(context);
      const response = await _createVolume(MOCK.request.body);
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
      /// validate data
      expect(response.data).toBeDefined();
      const {volume} = response.data;
      expect(typeof volume.id).toBe('string');
      expect(typeof volume.name).toBe('string');
      expect(typeof volume.size_gigabytes).toBe('number');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should POST only required parameters', async () => {
      const _createVolume = createVolume(context);
      const response = await _createVolume(MOCK.request.minimumBody);
      Object.assign(response, {request: mock.history.post[0]});
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('post');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const {
        /// required
        name,
        region,
        size_gigabytes,
        /// non-required
        description,
        filesystem_label,
        filesystem_type,
        snapshot_id,
        tags,
      } = JSON.parse(request.data);
      expect(name).toBe(MOCK.request.minimumBody.name);
      expect(region).toBe(MOCK.request.minimumBody.region);
      expect(size_gigabytes).toBe(MOCK.request.minimumBody.size_gigabytes);
      expect(description).toBeUndefined();
      expect(filesystem_label).toBeUndefined();
      expect(filesystem_type).toBeUndefined();
      expect(snapshot_id).toBeUndefined();
      expect(tags).toBeUndefined();
    });
  });
});
