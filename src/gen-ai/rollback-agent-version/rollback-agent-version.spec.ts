import { rollbackAgentVersion } from './rollback-agent-version';

describe('rollback-agent-version', () => {
  const default_input = { agent_uuid: 'aid', version_uuid: 'vid' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { put: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.put.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof rollbackAgentVersion).toBe('function');
    expect(typeof rollbackAgentVersion(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _rollbackAgentVersion = rollbackAgentVersion(context);
    await _rollbackAgentVersion(default_input);
    expect(httpClient.put).toHaveBeenCalledWith(
      `/gen-ai/agents/${default_input.agent_uuid}/versions/${default_input.version_uuid}/rollback`,
      { uuid: default_input.version_uuid }
    );
  });

  it('should output axios response', async () => {
    const _rollbackAgentVersion = rollbackAgentVersion(context);
    const output = await _rollbackAgentVersion(default_input);
    expect(output).toBe(default_output);
  });
}); 