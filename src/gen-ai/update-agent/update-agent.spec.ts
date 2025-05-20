import { updateAgent } from './update-agent';

describe('update-agent', () => {
  const default_input = { agent_uuid: 'id', name: 'n' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { put: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.put.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof updateAgent).toBe('function');
    expect(typeof updateAgent(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateAgent = updateAgent(context);
    await _updateAgent(default_input);
    expect(httpClient.put).toHaveBeenCalledWith(`/gen-ai/agents/${default_input.agent_uuid}`, { name: default_input.name });
  });

  it('should output axios response', async () => {
    const _updateAgent = updateAgent(context);
    const output = await _updateAgent(default_input);
    expect(output).toBe(default_output);
  });
});
