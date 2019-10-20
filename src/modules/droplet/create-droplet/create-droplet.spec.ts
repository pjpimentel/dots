import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {createDroplet} from './create-droplet';
import * as MOCK from './create-droplet.mock';

describe('droplet', () => {
  const URL = '/droplets';
  const TOKEN = 'bearer-token';
  const mock = new MockAdapter(axios);
  mock.onPost(URL, MOCK.request.body).reply(
    MOCK.response.headers.status,
    MOCK.response.body,
    MOCK.response.headers,
  );
  mock.onPost(URL, MOCK.request.minimumBody).reply(
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
  describe('create-droplet', () => {
    it('should be a fn', () => {
      expect(typeof createDroplet).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof createDroplet(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _createDroplet = createDroplet(context);
      const response = await _createDroplet(MOCK.request.body);
      Object.assign(response, {request: mock.history.post[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('post');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      /// validate data
      expect(response.data).toBeDefined();
      const {droplet} = response.data;
      expect(typeof droplet.id).toBe('number');
      expect(typeof droplet.name).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should POST only required parameters', async () => {
      const _createDroplet = createDroplet(context);
      const response = await _createDroplet(MOCK.request.minimumBody);
      Object.assign(response, {request: mock.history.post[0]});
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('post');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.data).toBeDefined();
      const {
        /// required
        name,
        region,
        size,
        image,
        /// non-required
        backups,
        ipv6,
        monitoring,
        private_networking,
        ssh_keys,
        tags,
        user_data,
        volumes,
      } = JSON.parse(request.data);
      expect(name).toBe(MOCK.request.minimumBody.name);
      expect(region).toBe(MOCK.request.minimumBody.region);
      expect(size).toBe(MOCK.request.minimumBody.size);
      expect(image).toBe(MOCK.request.minimumBody.image);
      expect(backups).toBeUndefined();
      expect(ipv6).toBeUndefined();
      expect(private_networking).toBeUndefined();
      expect(monitoring).toBeUndefined();
      expect(ssh_keys).toBeUndefined();
      expect(tags).toBeUndefined();
      expect(user_data).toBeUndefined();
      expect(volumes).toBeUndefined();
    });
  });
});