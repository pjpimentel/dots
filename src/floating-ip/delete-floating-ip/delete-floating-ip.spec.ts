import { deleteFloatingIp } from './delete-floating-ip';

describe('delete-floating-ip', () => {
  const default_input = {
    ip: Math.random(),
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
    expect(typeof deleteFloatingIp).toBe('function');
    expect(typeof deleteFloatingIp(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteFloatingIp = deleteFloatingIp(context);
    await _deleteFloatingIp(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/floating_ips/${default_input.ip}`);
  });

  it('should output axios response', async () => {
    const _deleteFloatingIp = deleteFloatingIp(context);
    const output = await _deleteFloatingIp(default_input);

    expect(output).toBe(default_output);
  });
});
