import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {listDropletKernels} from './list-droplet-kernels';
import * as MOCK from './list-droplet-kernels.mock';

describe('droplet', () => {
  const DROPLET_ID = 123;
  const PAGE = 3;
  const PER_PAGE = 26;
  const URL = `/droplets/${DROPLET_ID}/kernels`;
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
  describe('list-droplet-kernels', () => {
    it('should be a fn', () => {
      expect(typeof listDropletKernels).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof listDropletKernels(context)).toBe('function');
    });
    it('should return IResponse<ListDropletsResponse>', async () => {
      const _listDropletKernels = listDropletKernels(context);
      const response = await _listDropletKernels({
        id: DROPLET_ID,
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
      expect(request.params.resource_type).toBeUndefined();
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.links).toBeDefined();
      expect(response.data.meta).toBeDefined();
      expect(response.data.kernels).toBeDefined();
      const {kernels} = response.data;
      const [kernel] = kernels;
      expect(typeof kernel.id).toBe('number');
      expect(typeof kernel.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should have default parameters', async () => {
      const defaultPage = 1;
      const defaultper_page = 25;
      const _listDropletKernels = listDropletKernels(context);
      const response = await _listDropletKernels({
        id: DROPLET_ID,
      });
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(defaultPage);
      expect(request.params.per_page).toBe(defaultper_page);
    });
  });
});