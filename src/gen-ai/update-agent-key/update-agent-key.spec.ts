import { updateAgentKey } from './update-agent-key';

describe('update-agent-key', () => {
  const default_input = { agent_uuid: 'id', api_key_uuid: 'kid', name: 'n' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { put: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.put.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof updateAgentKey).toBe('function');
    expect(typeof updateAgentKey(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateAgentKey = updateAgentKey(context);
    await _updateAgentKey(default_input);
    expect(httpClient.put).toHaveBeenCalledWith(`/gen-ai/agents/${default_input.agent_uuid}/api_keys/${default_input.api_key_uuid}`, { name: default_input.name });
  });

  it('should output axios response', async () => {
    const _updateAgentKey = updateAgentKey(context);
    const output = await _updateAgentKey(default_input);
    expect(output).toBe(default_output);
  });
});
