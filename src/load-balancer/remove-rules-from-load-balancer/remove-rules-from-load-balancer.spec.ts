import { removeRulesFromLoadBalancer } from './remove-rules-from-load-balancer';

describe('remove-rules-from-load-balancer', () => {
  const default_input = {
    load_balancer_id: require('crypto').randomBytes(2),
    forwarding_rules: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    delete: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.delete.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof removeRulesFromLoadBalancer).toBe('function');
    expect(typeof removeRulesFromLoadBalancer(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _removeRulesFromLoadBalancer = removeRulesFromLoadBalancer(context);
    await _removeRulesFromLoadBalancer(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/load_balancers/${default_input.load_balancer_id}/forwarding_rules`, {
      data: {
        ...default_input,
        load_balancer_id: undefined
      },
    });
  });

  it('should output axios response', async () => {
    const _removeRulesFromLoadBalancer = removeRulesFromLoadBalancer(context);
    const output = await _removeRulesFromLoadBalancer(default_input);

    expect(output).toBe(default_output);
  });
});
