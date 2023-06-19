import { updateLoadBalancer } from './update-load-balancer';

describe('update-load-balancer', () => {
  const default_input = {
    algorithm: require('crypto').randomBytes(2),
    droplet_ids: require('crypto').randomBytes(2),
    enable_proxy_protocol: require('crypto').randomBytes(2),
    forwarding_rules: require('crypto').randomBytes(2),
    health_check: require('crypto').randomBytes(2),
    load_balancer_id: require('crypto').randomBytes(2),
    name: require('crypto').randomBytes(2),
    redirect_http_to_https: require('crypto').randomBytes(2),
    region: require('crypto').randomBytes(2),
    sticky_sessions: require('crypto').randomBytes(2),
    tag: require('crypto').randomBytes(2),
    vpc_uuid: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    put: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.put.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof updateLoadBalancer).toBe('function');
    expect(typeof updateLoadBalancer(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateLoadBalancer = updateLoadBalancer(context);
    await _updateLoadBalancer(default_input);

    expect(httpClient.put).toHaveBeenCalledWith(`/load_balancers/${default_input.load_balancer_id}`, {
      ...default_input,
      load_balancer_id: undefined,
    });
  });

  it('should output axios response', async () => {
    const _updateLoadBalancer = updateLoadBalancer(context);
    const output = await _updateLoadBalancer(default_input);

    expect(output).toBe(default_output);
  });
});
