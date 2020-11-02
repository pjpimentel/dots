import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {destroyDropletAndAllAssociatedResources} from './destroy-droplet-and-all-associated-resources';
import * as MOCK from './destroy-droplet-and-all-associated-resources.mock';

describe('droplet', () => {
  const DROPLET_ID = 123;
  const URL = `/droplets/${DROPLET_ID}/destroy_with_associated_resources/dangerous`;
  const TOKEN = process.env.TEST_TOKEN as string;
  const mock = new MockAdapter(axios);
  mock.onDelete(URL, undefined, MOCK.request.headers).reply(
    MOCK.response.headers.status,
    undefined,
    MOCK.response.headers,
  );
  mock.onDelete(URL, undefined, {...MOCK.request.headers, "X-Dangerous": "false"}).reply(
    MOCK.response.headers.status,
    undefined,
    MOCK.response.headers,
  );
  const context = createContext({
    axios,
    token: TOKEN,
  });
  beforeEach(() => {
    mock.resetHistory();
  });
  describe('destroy-droplet-and-all-associated-resources', () => {
    it('should be a fn', () => {
      expect(typeof destroyDropletAndAllAssociatedResources).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof destroyDropletAndAllAssociatedResources(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _destroyDropletAndAllAssociatedResources = destroyDropletAndAllAssociatedResources(context);
      const response = await _destroyDropletAndAllAssociatedResources({
        acknowledge: true,
        droplet_id: DROPLET_ID,
      });
      Object.assign(response, {request: mock.history.delete[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('delete');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.headers["X-Dangerous"]).toBe("true");
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should respect acknowledge input', async () => {
      const _destroyDropletAndAllAssociatedResources = destroyDropletAndAllAssociatedResources(context);
      const response = await _destroyDropletAndAllAssociatedResources({
        acknowledge: false,
        droplet_id: DROPLET_ID,
      });
      Object.assign(response, {request: mock.history.delete[0]});
      /// validate request
      const {request} = response;
      expect(request.headers["X-Dangerous"]).toBe("false");
    });
  });
});
