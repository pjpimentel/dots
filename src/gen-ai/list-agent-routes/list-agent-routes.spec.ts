import { listAgentRoutes } from './list-agent-routes';

describe('list-agent-routes', () => {
  const default_input = { agent_uuid: 'id' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { get: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.get.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof listAgentRoutes).toBe('function');
    expect(typeof listAgentRoutes(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listAgentRoutes = listAgentRoutes(context);
    await _listAgentRoutes(default_input);
    expect(httpClient.get).toHaveBeenCalledWith(`/gen-ai/agents/${default_input.agent_uuid}/child_agents`);
  });

  it('should output axios response', async () => {
    const _listAgentRoutes = listAgentRoutes(context);
    const output = await _listAgentRoutes(default_input);
    expect(output).toBe(default_output);
  });
}); 