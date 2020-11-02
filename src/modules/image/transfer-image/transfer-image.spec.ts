import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import { transferImage } from './transfer-image';
import * as MOCK from './transfer-image.mock';

describe('image', () => {
  const IMAGE_ID = MOCK.response.body.action.resource_id;
  const URL = `/images/${IMAGE_ID}/actions`;
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
  describe('transfer-image', () => {
    it('should be a fn', () => {
      expect(typeof transferImage).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof transferImage(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _transferImage = transferImage(context);
      const response = await _transferImage({
        image_id: IMAGE_ID,
        region: 'nyc2',
      });
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
      expect(request.data).toBeDefined();
      const body = JSON.parse(request.data);
      expect(body).toMatchObject(MOCK.request.body);
      expect(body.type).toBe('transfer');
      expect(typeof body.region).toBe('string');
      /// validate data
      expect(response.data).toBeDefined();
      const {action} = response.data;
      expect(action).toBeDefined();
      expect(typeof action.id).toBe('number');
      expect(typeof action.status).toBe('string');
      expect(action.resource_id).toBe(IMAGE_ID);
      expect(action.resource_type).toBe('image');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
