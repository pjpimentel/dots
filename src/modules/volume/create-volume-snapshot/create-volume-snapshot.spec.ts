import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {createVolumeSnapshot} from './create-volume-snapshot';
import * as MOCK from './create-volume-snapshot.mock';

describe('volume', () => {
  const VOLUME_ID = MOCK.response.body.snapshot.resource_id;
  const SNAPSHOT_NAME = MOCK.request.body.name;
  const URL = `/volumes/${VOLUME_ID}/snapshots`;
  const TOKEN = 'bearer-token';
  const mock = new MockAdapter(axios);
  mock.onPost(URL, MOCK.request.body).reply(
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
  describe('list-volume-snapshots', () => {
    it('should be a fn', () => {
      expect(typeof createVolumeSnapshot).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof createVolumeSnapshot(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _createVolumeSnapshot = createVolumeSnapshot(context);
      const response = await _createVolumeSnapshot({
        volume_id: VOLUME_ID,
        name: SNAPSHOT_NAME,
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
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.snapshot).toBeDefined();
      const {snapshot} = response.data;
      expect(typeof snapshot.id).toBe('string');
      expect(snapshot.resource_type).toBe('volume');
      expect(snapshot.resource_id).toBe(VOLUME_ID);
      expect(snapshot.name).toBe(SNAPSHOT_NAME);
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
