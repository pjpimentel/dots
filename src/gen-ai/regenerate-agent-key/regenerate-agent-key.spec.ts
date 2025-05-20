import { regenerateAgentKey } from './regenerate-agent-key';

describe('regenerate-agent-key', () => {
  const default_input = { agent_uuid: 'id', api_key_uuid: 'kid' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { put: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.put.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof regenerateAgentKey).toBe('function');
    expect(typeof regenerateAgentKey(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _regenerateAgentKey = regenerateAgentKey(context);
    await _regenerateAgentKey(default_input);
    expect(httpClient.put).toHaveBeenCalledWith(`/gen-ai/agents/${default_input.agent_uuid}/api_keys/${default_input.api_key_uuid}/regenerate`);
  });

  it('should output axios response', async () => {
    const _regenerateAgentKey = regenerateAgentKey(context);
    const output = await _regenerateAgentKey(default_input);
    expect(output).toBe(default_output);
  });
}); 