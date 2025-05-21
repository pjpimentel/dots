import { updateAgentVisibility } from './update-agent-visibility';

describe('update-agent-visibility', () => {
  const default_input = { 
    agent_uuid: 'aid', 
    visibility: 'VISIBILITY_PUBLIC' 
  } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { put: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.put.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof updateAgentVisibility).toBe('function');
    expect(typeof updateAgentVisibility(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateAgentVisibility = updateAgentVisibility(context);
    await _updateAgentVisibility(default_input);
    expect(httpClient.put).toHaveBeenCalledWith(
      `/gen-ai/agents/${default_input.agent_uuid}/deployment_visibility`,
      {
        uuid: default_input.agent_uuid,
        visibility: default_input.visibility
      }
    );
  });

  it('should output axios response', async () => {
    const _updateAgentVisibility = updateAgentVisibility(context);
    const output = await _updateAgentVisibility(default_input);
    expect(output).toBe(default_output);
  });

  it('should allow VISIBILITY_DISABLED', async () => {
    const _updateAgentVisibility = updateAgentVisibility(context);
    const input = { agent_uuid: 'aid', visibility: 'VISIBILITY_DISABLED' } as any;
    await _updateAgentVisibility(input);
    expect(httpClient.put).toHaveBeenCalledWith(
      `/gen-ai/agents/${input.agent_uuid}/deployment_visibility`,
      {
        uuid: input.agent_uuid,
        visibility: input.visibility
      }
    );
  });
});
