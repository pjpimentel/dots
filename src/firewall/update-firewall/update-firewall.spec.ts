import { updateFirewall } from './update-firewall';

describe('update-firewall', () => {
  const default_input = {
    droplet_ids: Math.random(),
    id: Math.random(),
    inbound_rules: Math.random(),
    name: Math.random(),
    outbound_rules: Math.random(),
    tags: Math.random(),
  } as any;
  const default_output = Math.random();

  const httpClient = {
    put: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.put.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof updateFirewall).toBe('function');
    expect(typeof updateFirewall(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateFirewall = updateFirewall(context);
    await _updateFirewall(default_input);

    expect(httpClient.put).toHaveBeenCalledWith(`/firewalls/${default_input.id}`, {
      ...default_input,
      id: undefined,
    });
  });

  it('should output axios response', async () => {
    const _updateFirewall = updateFirewall(context);
    const output = await _updateFirewall(default_input);

    expect(output).toBe(default_output);
  });
});
