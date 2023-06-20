import { updateSshKey } from './update-ssh-key';

describe('update-ssh-key', () => {
  const default_input = {
    ssh_key_id: require('crypto').randomBytes(2),
    name: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

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
    expect(typeof updateSshKey).toBe('function');
    expect(typeof updateSshKey(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateSshKey = updateSshKey(context);
    await _updateSshKey(default_input);

    expect(httpClient.put).toHaveBeenCalledWith(`/account/keys/${default_input.ssh_key_id}`, {
      ...default_input,
      ssh_key_id: undefined,
    });
  });

  it('should output axios response', async () => {
    const _updateSshKey = updateSshKey(context);
    const output = await _updateSshKey(default_input);

    expect(output).toBe(default_output);
  });
});
