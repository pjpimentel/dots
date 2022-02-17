import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {listImageActions} from './list-image-actions';
import * as MOCK from './list-image-actions.mock';

describe('image', () => {
  const PAGE = 3;
  const PER_PAGE = 26;
  const IMAGE_ID = MOCK.response.body.actions[0].resource_id;
  const URL = `/images/${IMAGE_ID}/actions`;
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
  describe('list-image-actions', () => {
    it('should be a fn', () => {
      expect(typeof listImageActions).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof listImageActions(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _listImageActions = listImageActions(context);
      const response = await _listImageActions({
        image_id: IMAGE_ID,
        page: PAGE,
        per_page: PER_PAGE,
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
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(PAGE);
      expect(request.params.per_page).toBe(PER_PAGE);
      /// validate data
      expect(response.data).toBeDefined();
      expect(response.data.links).toBeDefined();
      expect(response.data.meta).toBeDefined();
      expect(response.data.actions).toBeDefined();
      const {actions} = response.data;
      const [action] = actions;
      expect(typeof action.id).toBe('number');
      expect(typeof action.status).toBe('string');
      expect(action.resource_id).toBe(IMAGE_ID);
      expect(action.resource_type).toBe('image');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should have default parameters', async () => {
      const defaultPage = 1;
      const defaultper_page = 25;
      const _listImageActions = listImageActions(context);
      const response = await _listImageActions({image_id: IMAGE_ID});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(defaultPage);
      expect(request.params.per_page).toBe(defaultper_page);
    });
  });
});
