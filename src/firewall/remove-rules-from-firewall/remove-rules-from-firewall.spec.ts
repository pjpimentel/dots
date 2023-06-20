import { removeRulesFromFirewall } from './remove-rules-from-firewall';

describe('remove-rules-from-firewall', () => {
  const default_input = {
    firewall_id: require('crypto').randomBytes(2),
    inbound_rules: require('crypto').randomBytes(2),
    outbound_rules: require('crypto').randomBytes(2),
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
    expect(typeof removeRulesFromFirewall).toBe('function');
    expect(typeof removeRulesFromFirewall(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _removeRulesFromFirewall = removeRulesFromFirewall(context);
    await _removeRulesFromFirewall(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/firewalls/${default_input.firewall_id}/rules`, {
      data: {
        ...default_input,
        firewall_id: undefined,
      }
    });
  });

  it('should output axios response', async () => {
    const _removeRulesFromFirewall = removeRulesFromFirewall(context);
    const output = await _removeRulesFromFirewall(default_input);

    expect(output).toBe(default_output);
  });
});
