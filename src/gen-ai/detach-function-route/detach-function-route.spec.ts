import { detachFunctionRoute } from './detach-function-route';

describe('detach-function-route', () => {
  const default_input = { agent_uuid: 'id', function_route_id: 'fid' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { delete: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.delete.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof detachFunctionRoute).toBe('function');
    expect(typeof detachFunctionRoute(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _detachFunctionRoute = detachFunctionRoute(context);
    await _detachFunctionRoute(default_input);
    expect(httpClient.delete).toHaveBeenCalledWith(
      `/gen-ai/agents/${default_input.agent_uuid}/functions/${default_input.function_route_id}`
    );
  });

  it('should output axios response', async () => {
    const _detachFunctionRoute = detachFunctionRoute(context);
    const output = await _detachFunctionRoute(default_input);
    expect(output).toBe(default_output);
  });
}); 