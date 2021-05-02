import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {deleteVolumeByName} from './delete-volume-by-name';
import * as MOCK from './delete-volume-by-name.mock';

describe('volume', () => {
  const VOLUME_NAME = 'my-volume-id';
  const VOLUME_REGION = 'my-volume-region';
  const URL = `/volumes`;
  const TOKEN = process.env.TEST_TOKEN as string;
  const mock = new MockAdapter(axios);
  mock.onDelete(URL).reply(
    MOCK.response.headers.status,
    undefined,
    MOCK.response.headers,
  );
  const context = createContext({
    axios,
    token: TOKEN,
  });
  beforeEach(() => {
    mock.resetHistory();
  });
  describe('delete-volume-by-name', () => {
    it('should be a fn', () => {
      expect(typeof deleteVolumeByName).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof deleteVolumeByName(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _deleteVolumeByName = deleteVolumeByName(context);
      const response = await _deleteVolumeByName({
        region: VOLUME_REGION,
        volume_name: VOLUME_NAME,
      });
      Object.assign(response, {request: mock.history.delete[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('delete');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      expect(request.params).toBeDefined();
      expect(request.params.name).toBe(VOLUME_NAME);
      expect(request.params.region).toBe(VOLUME_REGION);
      expect(request.data).toBeUndefined();
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
