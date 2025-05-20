import { listAgents } from './list-agents';

describe('list-agents', () => {
  const default_output = require('crypto').randomBytes(2);
  const httpClient = {
    get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };
  const context = { httpClient } as any;

  beforeEach(() => {
    httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof listAgents).toBe('function');
    expect(typeof listAgents(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listAgents = listAgents(context);
    await _listAgents({});
    expect(httpClient.get).toHaveBeenCalledWith(`/gen-ai/agents`, { params: { page: 1, per_page: 25 } });
  });

  it('should work with no input', async () => {
    const _listAgents = listAgents(context);
    await _listAgents();
    expect(httpClient.get).toHaveBeenCalledWith(`/gen-ai/agents`, { params: { page: 1, per_page: 25 } });
  });

  it('should output axios response', async () => {
    const _listAgents = listAgents(context);
    const output = await _listAgents({});
    expect(output).toBe(default_output);
  });
});
