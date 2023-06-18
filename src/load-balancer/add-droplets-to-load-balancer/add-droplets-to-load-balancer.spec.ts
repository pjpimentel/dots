import { addDropletsToLoadBalancer } from './add-droplets-to-load-balancer';

describe('add-droplets-to-load-balancer', () => {
  const default_input = {
    load_balancer_id: Math.random(),
    droplet_ids: Math.random(),
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
    expect(typeof addDropletsToLoadBalancer).toBe('function');
    expect(typeof addDropletsToLoadBalancer(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _addDropletsToLoadBalancer = addDropletsToLoadBalancer(context);
    await _addDropletsToLoadBalancer(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/load_balancers/${default_input.load_balancer_id}/droplets`, {
      ...default_input,
      load_balancer_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _addDropletsToLoadBalancer = addDropletsToLoadBalancer(context);
    const output = await _addDropletsToLoadBalancer(default_input);

    expect(output).toBe(default_output);
  });
});
