import { deleteAnthropicKey } from './delete-anthropic-key';

describe('delete-anthropic-key', () => {
  const default_input = { key_uuid: 'kid' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { delete: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.delete.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof deleteAnthropicKey).toBe('function');
    expect(typeof deleteAnthropicKey(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteAnthropicKey = deleteAnthropicKey(context);
    await _deleteAnthropicKey(default_input);
    expect(httpClient.delete).toHaveBeenCalledWith(`/gen-ai/anthropic/keys/${default_input.key_uuid}`);
  });

  it('should output axios response', async () => {
    const _deleteAnthropicKey = deleteAnthropicKey(context);
    const output = await _deleteAnthropicKey(default_input);
    expect(output).toBe(default_output);
  });
}); 