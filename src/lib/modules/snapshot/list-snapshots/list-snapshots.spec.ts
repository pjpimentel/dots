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
      const response = await _listSnapshots({page: PAGE, per_page: PER_PAGE});
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
      expect(request.params.resource_type).toBeUndefined();
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.links).toBeDefined();
      expect(response.data.meta).toBeDefined();
      expect(response.data.snapshots).toBeDefined();
      const {snapshots} = response.data;
      const [snapshot] = snapshots;
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
    it('should have default parameters', async () => {
      const defaultPage = 1;
      const defaultper_page = 25;
      const _listSnapshots = listSnapshots(context);
      const response = await _listSnapshots({});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(defaultPage);
      expect(request.params.per_page).toBe(defaultper_page);
    });
    it('should accept `resourceType` filter', async () => {
      const firstType = 'droplet';
      const secondType = 'volume';

      const _listSnapshots = listSnapshots(context);
      const firstResponse = await _listSnapshots({resourceType: firstType});
      const secondResponse = await _listSnapshots({resourceType: secondType});

      Object.assign(firstResponse, { request: mock.history.get[0]});
      Object.assign(secondResponse, { request: mock.history.get[1]});
      /// validate both requests
      const [
        {request: {params: firstParams}},
        {request: {params: secondParams}},
      ] = await Promise.all([firstResponse, secondResponse]);
      expect(firstParams).toBeDefined();
      expect(firstParams.resource_type).toBe(firstType);
      expect(secondParams).toBeDefined();
      expect(secondParams.resource_type).toBe(secondType);
    });
  });
});