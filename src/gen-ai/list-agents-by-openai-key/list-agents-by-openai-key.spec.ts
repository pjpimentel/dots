import { listAgentsByOpenAIKey } from './list-agents-by-openai-key';

describe('list-agents-by-openai-key', () => {
  const default_input = { key_uuid: 'kid' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { get: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.get.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof listAgentsByOpenAIKey).toBe('function');
    expect(typeof listAgentsByOpenAIKey(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listAgentsByOpenAIKey = listAgentsByOpenAIKey(context);
    await _listAgentsByOpenAIKey(default_input);
    expect(httpClient.get).toHaveBeenCalledWith(`/gen-ai/openai/keys/${default_input.key_uuid}/agents`);
  });

  it('should output axios response', async () => {
    const _listAgentsByOpenAIKey = listAgentsByOpenAIKey(context);
    const output = await _listAgentsByOpenAIKey(default_input);
    expect(output).toBe(default_output);
  });
}); 