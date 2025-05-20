import { createAnthropicKey } from './create-anthropic-key';

describe('create-anthropic-key', () => {
  const default_input = { api_key: 'sk-123', name: 'my key' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { post: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.post.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof createAnthropicKey).toBe('function');
    expect(typeof createAnthropicKey(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createAnthropicKey = createAnthropicKey(context);
    await _createAnthropicKey(default_input);
    expect(httpClient.post).toHaveBeenCalledWith('/gen-ai/anthropic/keys', default_input);
  });

  it('should output axios response', async () => {
    const _createAnthropicKey = createAnthropicKey(context);
    const output = await _createAnthropicKey(default_input);
    expect(output).toBe(default_output);
  });
}); 