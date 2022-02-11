import axios from 'axios';
import {createContext} from './create-context';

describe('utils', () => {
  describe('create-context', () => {
    it('should be a fn', () => {
      expect(typeof createContext).toBe('function');
    });
    it('should return valid context', () => {
      const endpoint = 'https://api.digitalocean.com/v2/test-match';
      const token = process.env.TEST_TOKEN as string;
      const requestTimeoutInMs = 2000;
      const ctx = createContext({
        axios,
        endpoint,
        requestTimeoutInMs,
        token,
      });
      expect(ctx.endpoint).toEqual(endpoint);
      expect(ctx.httpClient).toBeDefined();
      expect(ctx.httpClient.defaults).toBeDefined();
      expect(ctx.httpClient.defaults.headers).toBeDefined();
      const {headers, baseURL} = ctx.httpClient.defaults;
      expect(headers.Authorization).toEqual(`Bearer ${token}`);
      expect(headers['Content-Type']).toEqual('application/json');
      expect(baseURL).toEqual(endpoint);
      expect(typeof ctx.httpClient.delete).toBe('function');
      expect(typeof ctx.httpClient.get).toBe('function');
      expect(typeof ctx.httpClient.head).toBe('function');
      expect(typeof ctx.httpClient.patch).toBe('function');
      expect(typeof ctx.httpClient.post).toBe('function');
      expect(typeof ctx.httpClient.put).toBe('function');
    });
  });
});
