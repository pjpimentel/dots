import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {listDropletAssociatedResources} from './list-droplet-associated-resources';
import * as MOCK from './list-droplet-associated-resources.mock';

describe('droplet', () => {
  const DROPLET_ID = 123;
  const URL = `/droplets/${DROPLET_ID}/destroy_with_associated_resources`;
  const TOKEN = process.env.TEST_TOKEN as string;
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
  describe('list-droplet-associated-resources', () => {
    it('should be a fn', () => {
      expect(typeof listDropletAssociatedResources).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof listDropletAssociatedResources(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _listDropletAssociatedResources = listDropletAssociatedResources(context);
      const response = await _listDropletAssociatedResources({
        droplet_id: DROPLET_ID,
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
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('get');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      /// validate data
      expect(response.data).toBeDefined();
      expect(Array.isArray(response.data.snapshots)).toBe(true);
      expect(Array.isArray(response.data.volume_snapshots)).toBe(true);
      expect(Array.isArray(response.data.volumes)).toBe(true);
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
