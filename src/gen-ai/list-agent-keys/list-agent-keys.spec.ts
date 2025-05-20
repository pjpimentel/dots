import { listAgentKeys } from './list-agent-keys';

describe('list-agent-keys', () => {
  const default_input = { agent_uuid: 'id' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { get: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.get.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof listAgentKeys).toBe('function');
    expect(typeof listAgentKeys(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listAgentKeys = listAgentKeys(context);
    await _listAgentKeys(default_input);
    expect(httpClient.get).toHaveBeenCalledWith(`/gen-ai/agents/${default_input.agent_uuid}/api_keys`);
  });

  it('should output axios response', async () => {
    const _listAgentKeys = listAgentKeys(context);
    const output = await _listAgentKeys(default_input);
    expect(output).toBe(default_output);
  });
});
