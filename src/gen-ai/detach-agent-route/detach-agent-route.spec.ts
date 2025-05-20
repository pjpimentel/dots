import { detachAgentRoute } from './detach-agent-route';

describe('detach-agent-route', () => {
  const default_input = { parent_agent_uuid: 'pid', child_agent_uuid: 'cid' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { delete: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.delete.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof detachAgentRoute).toBe('function');
    expect(typeof detachAgentRoute(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _detachAgentRoute = detachAgentRoute(context);
    await _detachAgentRoute(default_input);
    expect(httpClient.delete).toHaveBeenCalledWith(
      `/gen-ai/agents/${default_input.parent_agent_uuid}/child_agents/${default_input.child_agent_uuid}`
    );
  });

  it('should output axios response', async () => {
    const _detachAgentRoute = detachAgentRoute(context);
    const output = await _detachAgentRoute(default_input);
    expect(output).toBe(default_output);
  });
}); 