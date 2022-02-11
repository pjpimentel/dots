import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {getApp} from './get-app';
import * as MOCK from './get-app.mock';

describe('app', () => {
  const URL = `/apps/${MOCK.response.body.app.id}`;
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
  describe('get-app', () => {
    it('should be a fn', () => {
      expect(typeof getApp).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getApp(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getApp = getApp(context);
      const response = await _getApp({
        app_id: MOCK.response.body.app.id,
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
      expect(response.data.app).toBeDefined();
      const {app} = response.data;
      expect(typeof app.id).toBe('string');
      expect(typeof app.spec.name).toBe('string');
      expect(app.id).toBe(MOCK.response.body.app.id);
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
