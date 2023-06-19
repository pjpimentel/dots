import { deleteFirewall } from './delete-firewall';

describe('delete-firewall', () => {
  const default_input = {
    firewall_id: require('crypto').randomBytes(2),
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
    expect(typeof deleteFirewall).toBe('function');
    expect(typeof deleteFirewall(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteFirewall = deleteFirewall(context);
    await _deleteFirewall(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/firewalls/${default_input.firewall_id}`);
  });

  it('should output axios response', async () => {
    const _deleteFirewall = deleteFirewall(context);
    const output = await _deleteFirewall(default_input);

    expect(output).toBe(default_output);
  });
});
