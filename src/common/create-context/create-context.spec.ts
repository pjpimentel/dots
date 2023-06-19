import axios from 'axios';
import {createContext} from './create-context';

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

it('should use default parameters', () => {
  const http_client = Math.random();
  const axios = {
    create: jest.fn().mockReturnValue(http_client)
  }
  const input = {
    axios,
    token: Math.random(),
  } as any;
  const context = createContext(input);

  expect(context.httpClient).toBe(http_client);

  expect(axios.create).toHaveBeenCalledWith({
    baseURL: 'https://api.digitalocean.com/v2',
    headers: {
      'Authorization': `Bearer ${input.token}`,
      'Content-Type': 'application/json',
    },
    timeout: 1000 * 15,
  })
});
