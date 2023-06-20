import { addTagsToFirewall } from './add-tags-to-firewall';

describe('add-tags-to-firewall', () => {
  const default_input = {
    firewall_id: require('crypto').randomBytes(2),
    tags: require('crypto').randomBytes(2),
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
    expect(typeof addTagsToFirewall).toBe('function');
    expect(typeof addTagsToFirewall(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _addTagsToFirewall = addTagsToFirewall(context);
    await _addTagsToFirewall(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/firewalls/${default_input.firewall_id}/tags`, {
      ...default_input,
      firewall_id: undefined,
    });
  });

  it('should output axios response', async () => {
    const _addTagsToFirewall = addTagsToFirewall(context);
    const output = await _addTagsToFirewall(default_input);

    expect(output).toBe(default_output);
  });
});
