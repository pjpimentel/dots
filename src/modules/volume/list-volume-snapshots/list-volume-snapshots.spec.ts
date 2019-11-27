import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {listVolumeSnapshots} from './list-volume-snapshots';
import * as MOCK from './list-volume-snapshots.mock';

describe('volume', () => {
  const PAGE = 3;
  const PER_PAGE = 26;
  const VOLUME_ID = MOCK.response.body.snapshots[0].resource_id;
  const URL = `/volumes/${VOLUME_ID}/snapshots`;
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
  describe('list-volume-snapshots', () => {
    it('should be a fn', () => {
      expect(typeof listVolumeSnapshots).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof listVolumeSnapshots(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _listVolumeSnapshots = listVolumeSnapshots(context);
      const response = await _listVolumeSnapshots({
        volume_id: VOLUME_ID,
        page: PAGE,
        per_page: PER_PAGE,
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
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(PAGE);
      expect(request.params.per_page).toBe(PER_PAGE);
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.links).toBeDefined();
      expect(response.data.meta).toBeDefined();
      expect(response.data.snapshots).toBeDefined();
      const {snapshots} = response.data;
      const [snapshot] = snapshots;
      expect(typeof snapshot.id).toBe('string');
      expect(snapshot.resource_type).toBe('volume');
      expect(snapshot.resource_id).toBe(VOLUME_ID);
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should have default parameters', async () => {
      const defaultPage = 1;
      const defaultper_page = 25;
      const _listVolumeSnapshots = listVolumeSnapshots(context);
      const response = await _listVolumeSnapshots({volume_id: VOLUME_ID});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(defaultPage);
      expect(request.params.per_page).toBe(defaultper_page);
    });
    /// this test can be removed after id field remove
    it('should have default parameters (deprecated)', async () => {
      const defaultPage = 1;
      const defaultper_page = 25;
      const _listVolumeSnapshots = listVolumeSnapshots(context);
      const response = await _listVolumeSnapshots({id: VOLUME_ID} as any);
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(defaultPage);
      expect(request.params.per_page).toBe(defaultper_page);
    });
  });
});
