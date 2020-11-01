import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getSnapshot} from './get-snapshot';
import * as MOCK from './get-snapshot.mock';

describe('snapshot', () => {
  const URL_BY_ID = `/snapshots/${MOCK.response.body.snapshot.id}`;
  const TOKEN = 'bearer-token';
  const mock = new MockAdapter(axios);
  mock.onGet(URL_BY_ID).reply(
    MOCK.response.headers.status,
    MOCK.response.body,
    MOCK.response.headers,
  );
  const context = createContext({
    axios,
    token: TOKEN,
  });
  describe('get-snapshot', () => {
    it('should be a fn', () => {
      expect(typeof getSnapshot).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getSnapshot(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getSnapshot = getSnapshot(context);
      const snapshotId = MOCK.response.body.snapshot.id;
      const response = await _getSnapshot({snapshot_id: snapshotId});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL_BY_ID);
      expect(request.method).toBe('get');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data).toBeDefined();
      const {snapshot} = response.data;
      expect(typeof snapshot.id).toBe('string');
      expect(typeof snapshot.name).toBe('string');
      expect(typeof snapshot.min_disk_size).toBe('number');
      expect(typeof snapshot.size_gigabytes).toBe('number');
      expect(Array.isArray(snapshot.regions)).toBe(true);
      snapshot.regions.forEach((region) => {
        expect(typeof region).toBe('string');
      });
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
