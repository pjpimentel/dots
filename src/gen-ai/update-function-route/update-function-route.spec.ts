import { updateFunctionRoute } from './update-function-route';

describe('update-function-route', () => {
  const default_input = { 
    agent_uuid: 'id',
    function_route_id: 'fid',
    updates: { description: 'new desc' }
  } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { put: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.put.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof updateFunctionRoute).toBe('function');
    expect(typeof updateFunctionRoute(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateFunctionRoute = updateFunctionRoute(context);
    await _updateFunctionRoute(default_input);
    expect(httpClient.put).toHaveBeenCalledWith(
      `/gen-ai/agents/${default_input.agent_uuid}/functions/${default_input.function_route_id}`,
      default_input.updates
    );
  });

  it('should output axios response', async () => {
    const _updateFunctionRoute = updateFunctionRoute(context);
    const output = await _updateFunctionRoute(default_input);
    expect(output).toBe(default_output);
  });
}); 