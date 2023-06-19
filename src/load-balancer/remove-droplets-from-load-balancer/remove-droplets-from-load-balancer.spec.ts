import { removeDropletsFromLoadBalancer } from './remove-droplets-from-load-balancer';

describe('remove-droplets-from-load-balancer', () => {
  const default_input = {
    load_balancer_id: require('crypto').randomBytes(2),
    droplet_ids: require('crypto').randomBytes(2),
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
    expect(typeof removeDropletsFromLoadBalancer).toBe('function');
    expect(typeof removeDropletsFromLoadBalancer(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _removeDropletsFromLoadBalancer = removeDropletsFromLoadBalancer(context);
    await _removeDropletsFromLoadBalancer(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/load_balancers/${default_input.load_balancer_id}/droplets`, {
      data: {
        ...default_input,
        load_balancer_id: undefined
      }
    });
  });

  it('should output axios response', async () => {
    const _removeDropletsFromLoadBalancer = removeDropletsFromLoadBalancer(context);
    const output = await _removeDropletsFromLoadBalancer(default_input);

    expect(output).toBe(default_output);
  });
});
