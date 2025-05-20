import { getAnthropicKey } from './get-anthropic-key';

describe('get-anthropic-key', () => {
  const default_input = { key_uuid: 'kid' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { get: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.get.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof getAnthropicKey).toBe('function');
    expect(typeof getAnthropicKey(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getAnthropicKey = getAnthropicKey(context);
    await _getAnthropicKey(default_input);
    expect(httpClient.get).toHaveBeenCalledWith(`/gen-ai/anthropic/keys/${default_input.key_uuid}`);
  });

  it('should output axios response', async () => {
    const _getAnthropicKey = getAnthropicKey(context);
    const output = await _getAnthropicKey(default_input);
    expect(output).toBe(default_output);
  });
}); 