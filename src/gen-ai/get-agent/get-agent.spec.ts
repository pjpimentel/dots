import { getAgent } from './get-agent';

describe('get-agent', () => {
  const default_input = { agent_uuid: 'id' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = {
    get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };
  const context = { httpClient } as any;

  beforeEach(() => {
    httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof getAgent).toBe('function');
    expect(typeof getAgent(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getAgent = getAgent(context);
    await _getAgent(default_input);
    expect(httpClient.get).toHaveBeenCalledWith(`/gen-ai/agents/${default_input.agent_uuid}`);
  });

  it('should output axios response', async () => {
    const _getAgent = getAgent(context);
    const output = await _getAgent(default_input);
    expect(output).toBe(default_output);
  });
});
