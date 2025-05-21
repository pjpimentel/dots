import { listAgentVersions } from './list-agent-versions';

describe('list-agent-versions', () => {
  const default_input = { agent_uuid: 'aid', page: 4, per_page: 5 } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { get: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.get.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof listAgentVersions).toBe('function');
    expect(typeof listAgentVersions(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listAgentVersions = listAgentVersions(context);
    await _listAgentVersions(default_input);
    expect(httpClient.get).toHaveBeenCalledWith(
      `/gen-ai/agents/${default_input.agent_uuid}/versions`,
      { params: { page: 4, per_page: 5 } },
    );
  });

  it('should output axios response', async () => {
    const _listAgentVersions = listAgentVersions(context);
    const output = await _listAgentVersions(default_input);
    expect(output).toBe(default_output);
  });
}); 