import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {deleteDroplet} from './delete-droplet';
import * as MOCK from './delete-droplet.mock';

describe('droplet', () => {
  const DROPLET_ID = 'my-droplet-id';
  const URL = `/droplets/${DROPLET_ID}`;
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
  describe('delete-droplet', () => {
    it('should be a fn', () => {
      expect(typeof deleteDroplet).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof deleteDroplet(context)).toBe('function');
    });
    it('should return IResponse<void>', async () => {
      const _deleteDroplet = deleteDroplet(context);
      const response = await _deleteDroplet({id: DROPLET_ID});
      Object.assign(response, {request: mock.history.delete[0]});
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
      expect(request.data).toBeUndefined();
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});