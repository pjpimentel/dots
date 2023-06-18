import { createLoadBalancer } from './create-load-balancer';

describe('create-load-balancer', () => {
  const default_input = {
    algorithm: Math.random(),
    droplet_ids: Math.random(),
    enable_backend_keepalive: Math.random(),
    enable_proxy_protocol: Math.random(),
    forwarding_rules: Math.random(),
    health_check: Math.random(),
    name: Math.random(),
    redirect_http_to_https: Math.random(),
    region: Math.random(),
    sticky_sessions: Math.random(),
    tag: Math.random(),
    vpc_uuid: Math.random(),
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
    expect(typeof createLoadBalancer).toBe('function');
    expect(typeof createLoadBalancer(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createLoadBalancer = createLoadBalancer(context);
    await _createLoadBalancer(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/load_balancers`, default_input);
  });

  it('should output axios response', async () => {
    const _createLoadBalancer = createLoadBalancer(context);
    const output = await _createLoadBalancer(default_input);

    expect(output).toBe(default_output);
  });
});
