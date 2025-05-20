import { createAgentKey } from './create-agent-key';

describe('create-agent-key', () => {
  const default_input = { agent_uuid: 'id', name: 'n' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { post: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.post.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof createAgentKey).toBe('function');
    expect(typeof createAgentKey(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createAgentKey = createAgentKey(context);
    await _createAgentKey(default_input);
    expect(httpClient.post).toHaveBeenCalledWith(`/gen-ai/agents/${default_input.agent_uuid}/api_keys`, { name: default_input.name });
  });

  it('should allow empty name', async () => {
    const _createAgentKey = createAgentKey(context);
    await _createAgentKey({ agent_uuid: 'id' } as any);
    expect(httpClient.post).toHaveBeenCalledWith(`/gen-ai/agents/id/api_keys`, {});
  });

  it('should output axios response', async () => {
    const _createAgentKey = createAgentKey(context);
    const output = await _createAgentKey(default_input);
    expect(output).toBe(default_output);
  });
});
