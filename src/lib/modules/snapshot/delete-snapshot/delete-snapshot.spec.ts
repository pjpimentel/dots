import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import { deleteSnapshot } from './delete-snapshot';
import * as MOCK from './delete-snapshot.mock';

describe('snapshot', () => {
  const IMAGE_ID = 10001;
  const URL = `/snapshots/${IMAGE_ID}`;
  const TOKEN = 'bearer-token';
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
  describe('update-snapshot', () => {
    it('should be a fn', () => {
      expect(typeof deleteSnapshot).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof deleteSnapshot(context)).toBe('function');
    });
    it('should return IResponse<IUpdateSnapshotApiResponse>', async () => {
      const _deleteSnapshot = deleteSnapshot(context);
      const response = await _deleteSnapshot({id: IMAGE_ID});
      Object.assign(response, { request: mock.history.delete[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('delete');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      /// validate data
      expect(response.data).toBeUndefined();
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});