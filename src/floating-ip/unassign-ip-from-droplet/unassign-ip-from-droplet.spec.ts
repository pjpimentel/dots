import { unassignIpFromDroplet } from './unassign-ip-from-droplet';

describe('unassign-ip-from-droplet', () => {
  const default_input = {
    ip: Math.random(),
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
    expect(typeof unassignIpFromDroplet).toBe('function');
    expect(typeof unassignIpFromDroplet(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _unassignIpFromDroplet = unassignIpFromDroplet(context);
    await _unassignIpFromDroplet(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/floating_ips/${default_input.ip}/actions`, {
      ...default_input,
      ip: undefined,
      type: 'unassign'
    });
  });

  it('should output axios response', async () => {
    const _unassignIpFromDroplet = unassignIpFromDroplet(context);
    const output = await _unassignIpFromDroplet(default_input);

    expect(output).toBe(default_output);
  });
});
