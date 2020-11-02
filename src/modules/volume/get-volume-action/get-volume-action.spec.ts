import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {getVolumeAction} from './get-volume-action';
import * as MOCK from './get-volume-action.mock';

describe('volume', () => {
  const VOLUME_ID = MOCK.response.body.action.resource_id;
  const ACTION_ID = MOCK.response.body.action.id;
  const URL = `/volumes/${VOLUME_ID}/actions/${ACTION_ID}`;
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
  describe('get-action', () => {
    it('should be a fn', () => {
      expect(typeof getVolumeAction).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof getVolumeAction(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _getVolumeAction = getVolumeAction(context);
      const response = await _getVolumeAction({
        action_id: ACTION_ID,
        volume_id: VOLUME_ID,
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
      expect(response.data.action).toBeDefined();
      const {action} = response.data;
      expect(typeof action.completed_at).toBe('string');
      expect(typeof action.id).toBe('number');
      expect(typeof action.region_slug).toBe('string');
      expect(typeof action.resource_type).toBe('string');
      expect(typeof action.started_at).toBe('string')
      expect(typeof action.status).toBe('string')
      expect(['in-progress', 'completed', 'errored']).toContain(action.status);
      expect(typeof action.type).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
