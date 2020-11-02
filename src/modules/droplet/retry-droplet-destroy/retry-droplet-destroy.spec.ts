import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../../utils';
import {retryDropletDestroy} from './retry-droplet-destroy';
import * as MOCK from './retry-droplet-destroy.mock';

describe('droplet', () => {
  const DROPLET_ID = 123;
  const URL = `/droplets/${DROPLET_ID}/destroy_with_associated_resources/retry`;
  const TOKEN = 'bearer-token';
  const mock = new MockAdapter(axios);
  mock.onPost(URL).reply(
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
  describe('retry-droplet-destroy', () => {
    it('should be a fn', () => {
      expect(typeof retryDropletDestroy).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof retryDropletDestroy(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _retryDropletDestroy = retryDropletDestroy(context);
      const response = await _retryDropletDestroy({
        droplet_id: DROPLET_ID,
      });
      Object.assign(response, {request: mock.history.post[0]});
      /// validate response schema
      expect(typeof response).toBe('object');
      expect(typeof response.data).toBe("undefined");
      expect(typeof response.headers).toBe('object');
      expect(typeof response.request).toBe('object');
      expect(typeof response.status).toBe('number');
      /// validate request
      const {request} = response;
      expect(request.baseURL + request.url).toBe(context.endpoint + URL);
      expect(request.method).toBe('post');
      expect(request.headers).toMatchObject(MOCK.request.headers);
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
