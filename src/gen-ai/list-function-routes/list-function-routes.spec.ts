import { listFunctionRoutes } from './list-function-routes';

describe('list-function-routes', () => {
  const default_input = { agent_uuid: 'id' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { get: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.get.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof listFunctionRoutes).toBe('function');
    expect(typeof listFunctionRoutes(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listFunctionRoutes = listFunctionRoutes(context);
    await _listFunctionRoutes(default_input);
    expect(httpClient.get).toHaveBeenCalledWith(`/gen-ai/agents/${default_input.agent_uuid}/functions`);
  });

  it('should output axios response', async () => {
    const _listFunctionRoutes = listFunctionRoutes(context);
    const output = await _listFunctionRoutes(default_input);
    expect(output).toBe(default_output);
  });
}); 