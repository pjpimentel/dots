import { addRulesToFirewall } from './add-rules-to-firewall';

describe('add-rules-to-firewall', () => {
  const default_input = {
    firewall_id: require('crypto').randomBytes(2),
    inbound_rules: require('crypto').randomBytes(2),
    outbound_rules: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

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
    expect(typeof addRulesToFirewall).toBe('function');
    expect(typeof addRulesToFirewall(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _addRulesToFirewall = addRulesToFirewall(context);
    await _addRulesToFirewall(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/firewalls/${default_input.firewall_id}/rules`, {
      ...default_input,
      firewall_id: undefined,
    });
  });

  it('should output axios response', async () => {
    const _addRulesToFirewall = addRulesToFirewall(context);
    const output = await _addRulesToFirewall(default_input);

    expect(output).toBe(default_output);
  });
});
