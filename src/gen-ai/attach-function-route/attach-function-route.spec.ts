import { attachFunctionRoute } from './attach-function-route';

describe('attach-function-route', () => {
  const default_input = { 
    agent_uuid: 'id',
    function_route: {
      function_name: 'test',
      faas_namespace: 'ns',
      faas_name: 'fn'
    }
  } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { post: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.post.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof attachFunctionRoute).toBe('function');
    expect(typeof attachFunctionRoute(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _attachFunctionRoute = attachFunctionRoute(context);
    await _attachFunctionRoute(default_input);
    expect(httpClient.post).toHaveBeenCalledWith(`/gen-ai/agents/${default_input.agent_uuid}/functions`, {
      agent_uuid: default_input.agent_uuid,
      ...default_input.function_route
    });
  });

  it('should output axios response', async () => {
    const _attachFunctionRoute = attachFunctionRoute(context);
    const output = await _attachFunctionRoute(default_input);
    expect(output).toBe(default_output);
  });
}); 