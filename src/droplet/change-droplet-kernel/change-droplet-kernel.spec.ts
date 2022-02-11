import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createContext } from '../../common';
import {changeDropletKernel} from './change-droplet-kernel';
import * as MOCK from './change-droplet-kernel.mock';

describe('droplet', () => {
  const DROPLET_ID = Number(MOCK.response.body.action.resource_id);
  const URL = `/droplets/${DROPLET_ID}/actions`;
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
  describe('change-droplet-kernel', () => {
    it('should be a fn', () => {
      expect(typeof changeDropletKernel).toBe('function');
    });
    it('should return a fn', () => {
      expect(typeof changeDropletKernel(context)).toBe('function');
    });
    it('should return a valid response', async () => {
      const _changeDropletKernel = changeDropletKernel(context);
      const response = await _changeDropletKernel({
        droplet_id: DROPLET_ID,
        kernel: MOCK.request.body.kernel
      });
      Object.assign(response, {request: mock.history.post[0]});
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
      const requestBody = JSON.parse(request.data);
      expect(requestBody).toMatchObject(MOCK.request.body);
      expect(requestBody.type).toBe('change_kernel');
      /// validate data
      expect(response.data).toBeDefined();
      const {action} = response.data;
      expect(typeof action.id).toBe('number');
      expect(typeof action.status).toBe('string');
      /// validate headers
      const {headers, status} = response;
      expect(headers).toMatchObject(MOCK.response.headers);
      expect(status).toBe(MOCK.response.headers.status);
    });
  });
});
