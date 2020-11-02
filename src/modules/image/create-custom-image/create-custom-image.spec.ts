import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import { createCustomImage } from './create-custom-image';
import * as MOCK from './create-custom-image.mock';

describe('image', () => {
  const URL = '/images';
  const TOKEN = process.env.TEST_TOKEN as string;
  const mock = new MockAdapter(axios);
  mock.onPost(URL, MOCK.request.body).reply(
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
  describe('create-custom-image', () => {
    it('should be a fn', () => {
      expect(typeof createCustomImage).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof createCustomImage(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _createCustomImage = createCustomImage(context);
      const newImage = MOCK.request.body;
      const response = await _createCustomImage(newImage);
      Object.assign(response, { request: mock.history.post[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('post');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      /// validate data
      expect(response.data).toBeDefined();
      const {image} = response.data;
      expect(image).toBeDefined();
      expect(typeof image.id).toBe('number');
      expect(image.name).toBe(newImage.name);
      expect(typeof image.type).toBe('string');
      expect(typeof image.status).toBe('string');
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
