import { addDropletsToFirewall } from './add-droplets-to-firewall';

describe('add-droplets-to-firewall', () => {
  const default_input = {
    firewall_id: Math.random(),
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
    expect(typeof addDropletsToFirewall).toBe('function');
    expect(typeof addDropletsToFirewall(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _addDropletsToFirewall = addDropletsToFirewall(context);
    await _addDropletsToFirewall(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/firewalls/${default_input.firewall_id}/droplets`, {
      ...default_input,
      firewall_id: undefined,
    });
  });

  it('should output axios response', async () => {
    const _addDropletsToFirewall = addDropletsToFirewall(context);
    const output = await _addDropletsToFirewall(default_input);

    expect(output).toBe(default_output);
  });
});
