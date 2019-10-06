import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {listActions} from './list-actions';
import * as MOCK from './list-actions.mock';

describe('action', () => {
  const PAGE = 3;
  const PER_PAGE = 26;
  const URL = '/actions';
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
  describe('list-actions', () => {
    it('should be a fn', () => {
      expect(typeof listActions).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof listActions(context)).toBe('function');
    });
    it('should return IResponse<IListActionApiResponse>', async () => {
      const _listActions = listActions(context);
      const response = await _listActions({page: PAGE, per_page: PER_PAGE});
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
      expect(response.data.actions).toBeDefined();
      const {actions} = response.data;
      const [action] = actions;
      expect(typeof action.completed_at).toBe('string');
      expect(typeof action.id).toBe('number');
      expect(typeof action.region_slug).toBe('string');
      expect(typeof action.resource_type).toBe('string');
      expect(typeof action.resource_id).toBe('number');
      expect(typeof action.started_at).toBe('string')
      expect(typeof action.status).toBe('string')
      expect(['in-progress', 'completed', 'errored']).toContain(action.status);
      expect(typeof action.type).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
    it('should have default parameters', async () => {
      const defaultPage = 1;
      const defaultper_page = 25;
      const _listActions = listActions(context);
      const response = await _listActions({});
      Object.assign(response, { request: mock.history.get[0]});
      /// validate request
      const {request} = response;
      expect(request.params).toBeDefined();
      expect(request.params.page).toBe(defaultPage);
      expect(request.params.per_page).toBe(defaultper_page);
    });
  });
});
