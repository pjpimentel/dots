import { removeDropletsFromFirewall } from './remove-droplets-from-firewall';

describe('remove-droplets-from-firewall', () => {
  const default_input = {
    firewall_id: Math.random(),
    droplet_ids: Math.random(),
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
    expect(typeof removeDropletsFromFirewall).toBe('function');
    expect(typeof removeDropletsFromFirewall(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _removeDropletsFromFirewall = removeDropletsFromFirewall(context);
    await _removeDropletsFromFirewall(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/firewalls/${default_input.firewall_id}/droplets`, {
      data: {
        ...default_input,
        firewall_id: undefined,
      }
    });
  });

  it('should output axios response', async () => {
    const _removeDropletsFromFirewall = removeDropletsFromFirewall(context);
    const output = await _removeDropletsFromFirewall(default_input);

    expect(output).toBe(default_output);
  });
});
