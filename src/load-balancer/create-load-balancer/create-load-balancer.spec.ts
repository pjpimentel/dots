import { createLoadBalancer } from './create-load-balancer';

describe('create-load-balancer', () => {
  const default_input = {
    algorithm: require('crypto').randomBytes(2),
    droplet_ids: require('crypto').randomBytes(2),
    enable_backend_keepalive: require('crypto').randomBytes(2),
    enable_proxy_protocol: require('crypto').randomBytes(2),
    forwarding_rules: require('crypto').randomBytes(2),
    health_check: require('crypto').randomBytes(2),
    name: require('crypto').randomBytes(2),
    redirect_http_to_https: require('crypto').randomBytes(2),
    region: require('crypto').randomBytes(2),
    sticky_sessions: require('crypto').randomBytes(2),
    tag: require('crypto').randomBytes(2),
    vpc_uuid: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

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
