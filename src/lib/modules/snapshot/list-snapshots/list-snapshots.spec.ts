import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {listSnapshots} from './list-snapshots';
import * as MOCK from './list-snapshots.mock';

describe('snapshot', () => {
  const PAGE = 3;
  const PER_PAGE = 26;
  const URL = '/snapshots';
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
  describe('list-snapshots', () => {
    it('should be a fn', () => {
      expect(typeof listSnapshots).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof listSnapshots(context)).toBe('function');
    });
    it('should return IResponse<IListImageApiResponse>', async () => {
      const _listSnapshots = listSnapshots(context);
      const response = await _listSnapshots({page: PAGE, perPage: PER_PAGE});
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
      expect(typeof snapshot.id).toBe('number');
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
    it('should have default parameters', async () => {
      const defaultPage = 1;
      const defaultPerPage = 25;
      const _listSnapshots = listSnapshots(context);
      const response = await _listSnapshots({});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(defaultPage);
      expect(request.params.per_page).toBe(defaultPerPage);
    });
  });
});