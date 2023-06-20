import { createSshKey } from './create-ssh-key';

describe('create-ssh-key', () => {
  const default_input = {
    name: require('crypto').randomBytes(2),
    public_key: require('crypto').randomBytes(2),
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
    expect(typeof createSshKey).toBe('function');
    expect(typeof createSshKey(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createSshKey = createSshKey(context);
    await _createSshKey(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/account/keys`, default_input);
  });

  it('should output axios response', async () => {
    const _createSshKey = createSshKey(context);
    const output = await _createSshKey(default_input);

    expect(output).toBe(default_output);
  });
});
