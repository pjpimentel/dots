import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {getImageAction} from './get-image-action';
import * as MOCK from './get-image-action.mock';

describe('image', () => {
  const IMAGE_ID = MOCK.response.body.action.resource_id;
  const ACTION_ID = MOCK.response.body.action.id;
  const URL = `/images/${IMAGE_ID}/actions/${ACTION_ID}`;
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
  describe('get-image-action', () => {
    it('should be a fn', () => {
      expect(typeof getImageAction).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getImageAction(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getImageAction = getImageAction(context);
      const response = await _getImageAction({
        action_id: ACTION_ID,
        image_id: IMAGE_ID,
      });
      Object.assign(response, { request: mock.history.get[0]});
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
