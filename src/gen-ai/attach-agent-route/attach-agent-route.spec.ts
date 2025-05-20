import { attachAgentRoute } from './attach-agent-route';

describe('attach-agent-route', () => {
  const default_input = { 
    parent_agent_uuid: 'pid',
    child_agent_uuid: 'cid',
    route: {
      route_name: 'test',
      if_case: 'when needed'
    }
  } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { post: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.post.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof attachAgentRoute).toBe('function');
    expect(typeof attachAgentRoute(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _attachAgentRoute = attachAgentRoute(context);
    await _attachAgentRoute(default_input);
    expect(httpClient.post).toHaveBeenCalledWith(
      `/gen-ai/agents/${default_input.parent_agent_uuid}/child_agents/${default_input.child_agent_uuid}`,
      {
        parent_agent_uuid: default_input.parent_agent_uuid,
        child_agent_uuid: default_input.child_agent_uuid,
        ...default_input.route
      }
    );
  });

  it('should output axios response', async () => {
    const _attachAgentRoute = attachAgentRoute(context);
    const output = await _attachAgentRoute(default_input);
    expect(output).toBe(default_output);
  });
}); 