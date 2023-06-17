import { removeTagsFromFirewall } from './remove-tags-from-firewall';

describe('remove-tags-from-firewall', () => {
  const default_input = {
    firewall_id: Math.random(),
    tags: Math.random(),
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
    expect(typeof removeTagsFromFirewall).toBe('function');
    expect(typeof removeTagsFromFirewall(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _removeTagsFromFirewall = removeTagsFromFirewall(context);
    await _removeTagsFromFirewall(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/firewalls/${default_input.firewall_id}/tags`, {
      data: {
        ...default_input,
        firewall_id: undefined,
      }
    });
  });

  it('should output axios response', async () => {
    const _removeTagsFromFirewall = removeTagsFromFirewall(context);
    const output = await _removeTagsFromFirewall(default_input);

    expect(output).toBe(default_output);
  });
});
