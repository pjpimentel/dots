import { updateAnthropicKey } from './update-anthropic-key';

describe('update-anthropic-key', () => {
  const default_input = { 
    key_uuid: 'kid',
    updates: { name: 'New Name', enabled: true }
  } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { put: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.put.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof updateAnthropicKey).toBe('function');
    expect(typeof updateAnthropicKey(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateAnthropicKey = updateAnthropicKey(context);
    await _updateAnthropicKey(default_input);
    expect(httpClient.put).toHaveBeenCalledWith(
      `/gen-ai/anthropic/keys/${default_input.key_uuid}`,
      default_input.updates
    );
  });

  it('should output axios response', async () => {
    const _updateAnthropicKey = updateAnthropicKey(context);
    const output = await _updateAnthropicKey(default_input);
    expect(output).toBe(default_output);
  });
}); 