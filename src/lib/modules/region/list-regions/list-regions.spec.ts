import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {listRegions} from './list-regions';
import * as MOCK from './list-regions.mock';

describe('region', () => {
  const PAGE = 3;
  const PER_PAGE = 26;
  const URL = '/regions';
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
  describe('list-regions', () => {
    it('should be a fn', () => {
      expect(typeof listRegions).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof listRegions(context)).toBe('function');
    });
    it('should return IResponse<IListSizeApiResponse>', async () => {
      const _listRegions = listRegions(context);
      const response = await _listRegions({page: PAGE, perPage: PER_PAGE});
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
      expect(response.data.regions).toBeDefined();
      const {regions} = response.data;
      const [region] = regions;
      expect(typeof region.available).toBe('boolean');
      expect(typeof region.name).toBe('string');
      expect(typeof region.slug).toBe('string');
      expect(Array.isArray(region.sizes)).toBe(true);
      region.sizes.forEach((sizes) => {
        expect(typeof sizes).toBe('string');
      });
      expect(Array.isArray(region.features)).toBe(true);
      region.features.forEach((feature) => {
        expect(typeof feature).toBe('string');
      });
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should have default parameters', async () => {
      const defaultPage = 1;
      const defaultPerPage = 25;
      const _listRegions = listRegions(context);
      const response = await _listRegions({});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(defaultPage);
      expect(request.params.per_page).toBe(defaultPerPage);
    });
  });
});
