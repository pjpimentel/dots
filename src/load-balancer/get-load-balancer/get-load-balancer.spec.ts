import { getLoadBalancer } from './get-load-balancer';

describe('get-load-balancer', () => {
  const default_input = {
    load_balancer_id: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof getLoadBalancer).toBe('function');
    expect(typeof getLoadBalancer(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getLoadBalancer = getLoadBalancer(context);
    await _getLoadBalancer(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/load_balancers/${default_input.load_balancer_id}`);
  });

  it('should output axios response', async () => {
    const _getLoadBalancer = getLoadBalancer(context);
    const output = await _getLoadBalancer(default_input);

    expect(output).toBe(default_output);
  });
});
