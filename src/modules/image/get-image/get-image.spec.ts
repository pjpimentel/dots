import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getImage} from './get-image';
import * as MOCK from './get-image.mock';

describe('image', () => {
  const URL_BY_ID = `/images/${MOCK.response.body.image.id}`;
  const URL_BY_SLUG = `/images/${MOCK.response.body.image.slug}`;
  const TOKEN = 'bearer-token';
  const mock = new MockAdapter(axios);
  mock.onGet(URL_BY_ID).reply(
    MOCK.response.headers.status,
    MOCK.response.body,
    MOCK.response.headers,
  );
  mock.onGet(URL_BY_SLUG).reply(
    MOCK.response.headers.status,
    MOCK.response.body,
    MOCK.response.headers,
  );
  const context = createContext({
    axios,
    token: TOKEN,
  });
  describe('get-image', () => {
    it('should be a fn', () => {
      expect(typeof getImage).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getImage(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getImage = getImage(context);
      const imageId = MOCK.response.body.image.id;
      const response = await _getImage({id: imageId});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL_BY_ID);
      expect(request.method).toBe('get');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data).toBeDefined();
      const {image} = response.data;
      expect(typeof image.id).toBe('number');
      expect(typeof image.name).toBe('string');
      expect(typeof image.status).toBe('string');
      expect(typeof image.min_disk_size).toBe('number');
      expect(typeof image.size_gigabytes).toBe('number');
      expect(Array.isArray(image.regions)).toBe(true);
      image.regions.forEach((region) => {
        expect(typeof region).toBe('string');
      });
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should return a valid response', async () => {
      const _getImage = getImage(context);
      const imageSlug = MOCK.response.body.image.slug;
      const response = await _getImage({slug: imageSlug});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL_BY_ID);
      expect(request.method).toBe('get');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data).toBeDefined();
      const {image} = response.data;
      expect(typeof image.id).toBe('number');
      expect(typeof image.name).toBe('string');
      expect(typeof image.status).toBe('string');
      expect(typeof image.min_disk_size).toBe('number');
      expect(typeof image.size_gigabytes).toBe('number');
      expect(Array.isArray(image.regions)).toBe(true);
      image.regions.forEach((region) => {
        expect(typeof region).toBe('string');
      });
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
