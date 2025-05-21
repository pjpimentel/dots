import { listAgentsByAnthropicKey } from './list-agents-by-anthropic-key';

describe('list-agents-by-anthropic-key', () => {
  const default_input = { key_uuid: 'kid', page: 1, per_page: 50 } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { get: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.get.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof listAgentsByAnthropicKey).toBe('function');
    expect(typeof listAgentsByAnthropicKey(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listAgentsByAnthropicKey = listAgentsByAnthropicKey(context);
    await _listAgentsByAnthropicKey(default_input);
    expect(httpClient.get).toHaveBeenCalledWith(
      `/gen-ai/anthropic/keys/${default_input.key_uuid}/agents`,
      { params: { page: 1, per_page: 50 } },
    );
  });

  it('should output axios response', async () => {
    const _listAgentsByAnthropicKey = listAgentsByAnthropicKey(context);
    const output = await _listAgentsByAnthropicKey(default_input);
    expect(output).toBe(default_output);
  });
}); 