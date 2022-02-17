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
      const context = createContext({
        axios,
        endpoint,
        requestTimeoutInMs,
        token,
      });
      expect(context.endpoint).toEqual(endpoint);
      expect(context.httpClient).toBeDefined();
      expect(context.httpClient.defaults).toBeDefined();
      expect(context.httpClient.defaults.headers).toBeDefined();

      const baseURL = context.httpClient.defaults.baseURL;
      // TODO: remove following cast after axios type is fixed
      const headers: Record<string, string> = context.httpClient.defaults.headers as unknown as Record<string, string>;

      expect(headers.Authorization).toEqual(`Bearer ${token}`);
      expect(headers['Content-Type']).toEqual('application/json');
      expect(baseURL).toEqual(endpoint);

      expect(typeof context.httpClient.delete).toBe('function');
      expect(typeof context.httpClient.get).toBe('function');
      expect(typeof context.httpClient.head).toBe('function');
      expect(typeof context.httpClient.patch).toBe('function');
      expect(typeof context.httpClient.post).toBe('function');
      expect(typeof context.httpClient.put).toBe('function');
    });
  });
});
