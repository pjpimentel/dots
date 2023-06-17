import { createFirewall } from './create-firewall';

describe('create-firewall', () => {
  const default_input = {
    droplet_ids: Math.random(),
    inbound_rules: Math.random(),
    name: Math.random(),
    outbound_rules: Math.random(),
    tags: Math.random(),
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
    expect(typeof createFirewall).toBe('function');
    expect(typeof createFirewall(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createFirewall = createFirewall(context);
    await _createFirewall(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/firewalls`, {
      ...default_input,
      firewall_id: undefined,
    });
  });

  it('should output axios response', async () => {
    const _createFirewall = createFirewall(context);
    const output = await _createFirewall(default_input);

    expect(output).toBe(default_output);
  });
});
