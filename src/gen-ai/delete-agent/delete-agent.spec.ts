import { deleteAgent } from './delete-agent';

describe('delete-agent', () => {
  const default_input = { agent_uuid: 'id' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = {
    delete: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };
  const context = { httpClient } as any;

  beforeEach(() => {
    httpClient.delete.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof deleteAgent).toBe('function');
    expect(typeof deleteAgent(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteAgent = deleteAgent(context);
    await _deleteAgent(default_input);
    expect(httpClient.delete).toHaveBeenCalledWith(`/gen-ai/agents/${default_input.agent_uuid}`);
  });

  it('should output axios response', async () => {
    const _deleteAgent = deleteAgent(context);
    const output = await _deleteAgent(default_input);
    expect(output).toBe(default_output);
  });
});
