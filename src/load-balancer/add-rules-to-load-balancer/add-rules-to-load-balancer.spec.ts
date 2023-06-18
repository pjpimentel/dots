import { addRulesToLoadBalancer } from './add-rules-to-load-balancer';

describe('add-rules-to-load-balancer', () => {
  const default_input = {
    load_balancer_id: Math.random(),
    forwarding_rules: Math.random(),
  } as any;
  const default_output = Math.random();

  const httpClient = {
    post: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.post.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof addRulesToLoadBalancer).toBe('function');
    expect(typeof addRulesToLoadBalancer(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _addRulesToLoadBalancer = addRulesToLoadBalancer(context);
    await _addRulesToLoadBalancer(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/load_balancers/${default_input.load_balancer_id}/forwarding_rules`, {
      ...default_input,
      load_balancer_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _addRulesToLoadBalancer = addRulesToLoadBalancer(context);
    const output = await _addRulesToLoadBalancer(default_input);

    expect(output).toBe(default_output);
  });
});
