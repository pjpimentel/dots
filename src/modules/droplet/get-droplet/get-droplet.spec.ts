import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getDroplet} from './get-droplet';
import * as MOCK from './get-droplet.mock';

describe('droplet', () => {
  const URL = `/droplets/${MOCK.response.body.droplet.id}`;
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
  describe('get-droplet', () => {
    it('should be a fn', () => {
      expect(typeof getDroplet).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getDroplet(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getDroplet = getDroplet(context);
      const response = await _getDroplet({
        droplet_id: MOCK.response.body.droplet.id,
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
      expect(response.data.droplet).toBeDefined();
      const {droplet} = response.data;
      expect(typeof droplet.id).toBe('number');
      expect(typeof droplet.name).toBe('string');
      expect(droplet.id).toBe(MOCK.response.body.droplet.id);
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
