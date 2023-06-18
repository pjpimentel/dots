import { deleteLoadBalancer } from './delete-load-balancer';

describe('delete-load-balancer', () => {
  const default_input = {
    load_balancer_id: Math.random(),
  } as any;
  const default_output = Math.random();

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
    expect(typeof deleteLoadBalancer).toBe('function');
    expect(typeof deleteLoadBalancer(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteLoadBalancer = deleteLoadBalancer(context);
    await _deleteLoadBalancer(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/load_balancers/${default_input.load_balancer_id}`);
  });

  it('should output axios response', async () => {
    const _deleteLoadBalancer = deleteLoadBalancer(context);
    const output = await _deleteLoadBalancer(default_input);

    expect(output).toBe(default_output);
  });
});
