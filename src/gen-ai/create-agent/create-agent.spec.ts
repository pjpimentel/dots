import { createAgent } from './create-agent';

describe('create-agent', () => {
  const default_input = {
    name: 'name',
    model_uuid: 'model',
    instruction: 'instr',
    project_id: 'pid',
    region: 'region',
  } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = {
    post: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };
  const context = { httpClient } as any;

  beforeEach(() => {
    httpClient.post.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof createAgent).toBe('function');
    expect(typeof createAgent(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createAgent = createAgent(context);
    await _createAgent(default_input);
    expect(httpClient.post).toHaveBeenCalledWith(`/gen-ai/agents`, default_input);
  });

  it('should output axios response', async () => {
    const _createAgent = createAgent(context);
    const output = await _createAgent(default_input);
    expect(output).toBe(default_output);
  });
});
