import { destroySshKey } from './destroy-ssh-key';

describe('destroy-ssh-key', () => {
  const default_input = {
    ssh_key_id: require('crypto').randomBytes(2),
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
    expect(typeof destroySshKey).toBe('function');
    expect(typeof destroySshKey(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _destroySshKey = destroySshKey(context);
    await _destroySshKey(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/account/keys/${default_input.ssh_key_id}`);
  });

  it('should output axios response', async () => {
    const _destroySshKey = destroySshKey(context);
    const output = await _destroySshKey(default_input);

    expect(output).toBe(default_output);
  });
});
