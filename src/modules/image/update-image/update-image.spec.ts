import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import { updateImage } from './update-image';
import * as MOCK from './update-image.mock';

describe('image', () => {
  const URL = `/images/${MOCK.response.body.image.id}`;
  const TOKEN = 'bearer-token';
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
  describe('update-image', () => {
    it('should be a fn', () => {
      expect(typeof updateImage).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof updateImage(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _updateImage = updateImage(context);
      const newPayload = {
        ...MOCK.request.body,
        image_id: MOCK.response.body.image.id,
      };
      const response = await _updateImage(newPayload);
      Object.assign(response, { request: mock.history.post[0]});
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
      expect(JSON.parse(request.data)).toMatchObject(MOCK.request.body);
      /// validate data
      expect(response.data).toBeDefined();
      const {image} = response.data;
      expect(image).toBeDefined();
      expect(typeof image.id).toBe('number');
      expect(typeof image.name).toBe('string');
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