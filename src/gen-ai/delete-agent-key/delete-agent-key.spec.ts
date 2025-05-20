import { deleteAgentKey } from './delete-agent-key';

describe('delete-agent-key', () => {
  const default_input = { agent_uuid: 'id', api_key_uuid: 'kid' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { delete: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.delete.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof deleteAgentKey).toBe('function');
    expect(typeof deleteAgentKey(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteAgentKey = deleteAgentKey(context);
    await _deleteAgentKey(default_input);
    expect(httpClient.delete).toHaveBeenCalledWith(`/gen-ai/agents/${default_input.agent_uuid}/api_keys/${default_input.api_key_uuid}`);
  });

  it('should output axios response', async () => {
    const _deleteAgentKey = deleteAgentKey(context);
    const output = await _deleteAgentKey(default_input);
    expect(output).toBe(default_output);
  });
});
