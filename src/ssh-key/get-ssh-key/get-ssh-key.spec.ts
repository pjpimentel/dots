import { getSshKey } from './get-ssh-key';

describe('get-ssh-key', () => {
  const default_input = {
    ssh_key_id: Math.random(),
  } as any;
  const default_output = Math.random();

  const httpClient = {
    get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof getSshKey).toBe('function');
    expect(typeof getSshKey(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getSshKey = getSshKey(context);
    await _getSshKey(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/account/keys/${default_input.ssh_key_id}`);
  });

  it('should output axios response', async () => {
    const _getSshKey = getSshKey(context);
    const output = await _getSshKey(default_input);

    expect(output).toBe(default_output);
  });
});
