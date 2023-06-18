import { updateLoadBalancer } from './update-load-balancer';

describe('update-load-balancer', () => {
  const default_input = {
    algorithm: Math.random(),
    droplet_ids: Math.random(),
    enable_proxy_protocol: Math.random(),
    forwarding_rules: Math.random(),
    health_check: Math.random(),
    load_balancer_id: Math.random(),
    name: Math.random(),
    redirect_http_to_https: Math.random(),
    region: Math.random(),
    sticky_sessions: Math.random(),
    tag: Math.random(),
    vpc_uuid: Math.random(),
  } as any;
  const default_output = Math.random();

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
