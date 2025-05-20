import { listAnthropicKeys } from './list-anthropic-keys';

describe('list-anthropic-keys', () => {
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { get: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.get.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof listAnthropicKeys).toBe('function');
    expect(typeof listAnthropicKeys(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listAnthropicKeys = listAnthropicKeys(context);
    await _listAnthropicKeys();
    expect(httpClient.get).toHaveBeenCalledWith('/gen-ai/anthropic/keys');
  });

  it('should output axios response', async () => {
    const _listAnthropicKeys = listAnthropicKeys(context);
    const output = await _listAnthropicKeys();
    expect(output).toBe(default_output);
  });
}); 