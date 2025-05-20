import { updateAgentRoute } from './update-agent-route';

describe('update-agent-route', () => {
  const default_input = { 
    parent_agent_uuid: 'pid',
    child_agent_uuid: 'cid',
    updates: { if_case: 'when really needed' }
  } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { put: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.put.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof updateAgentRoute).toBe('function');
    expect(typeof updateAgentRoute(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateAgentRoute = updateAgentRoute(context);
    await _updateAgentRoute(default_input);
    expect(httpClient.put).toHaveBeenCalledWith(
      `/gen-ai/agents/${default_input.parent_agent_uuid}/child_agents/${default_input.child_agent_uuid}`,
      default_input.updates
    );
  });

  it('should output axios response', async () => {
    const _updateAgentRoute = updateAgentRoute(context);
    const output = await _updateAgentRoute(default_input);
    expect(output).toBe(default_output);
  });
}); 