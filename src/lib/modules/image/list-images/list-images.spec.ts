import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {listImages} from './list-images';
import * as MOCK from './list-images.mock';

describe('image', () => {
  const PAGE = 3;
  const PER_PAGE = 26;
  const URL = '/images';
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
  describe('list-images', () => {
    it('should be a fn', () => {
      expect(typeof listImages).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof listImages(context)).toBe('function');
    });
    it('should return IResponse<IListImageApiResponse>', async () => {
      const _listImages = listImages(context);
      const response = await _listImages({page: PAGE, perPage: PER_PAGE});
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
      expect(response.data.images).toBeDefined();
      const {images} = response.data;
      const [image] = images;
      expect(typeof image.id).toBe('string');
      expect(typeof image.name).toBe('string');
      expect(typeof image.type).toBe('string');
      expect(typeof image.status).toBe('string');
      expect(typeof image.min_disk_size).toBe('number');
      expect(typeof image.size_gigabytes).toBe('number');
      expect(Array.isArray(image.regions)).toBe(true);
      image.regions.forEach((region) => {
        expect(typeof region).toBe('string');
      });
      expect(typeof image.slug).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should have default parameters', async () => {
      const defaultPage = 1;
      const defaultPerPage = 25;
      const _listImages = listImages(context);
      const response = await _listImages({});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(defaultPage);
      expect(request.params.per_page).toBe(defaultPerPage);
    });
    it('should accept `tagName` filter', async () => {
      const tagName = 'my-tag-name';
      const _listImages = listImages(context);
      const response = await _listImages({tagName});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.tag_name).toBe(tagName);
    });
    it('should accept `type` filter', async () => {
      const type = 'distribution';
      const _listImages = listImages(context);
      const response = await _listImages({type});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.type).toBe(type);
    });
    it('should accept `userImages` filter', async () => {
      const userImages = true
      const _listImages = listImages(context);
      const response = await _listImages({userImages});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.private).toBe(userImages);
    });
  });
});