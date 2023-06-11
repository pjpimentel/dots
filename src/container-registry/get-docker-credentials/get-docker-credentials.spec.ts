import { getDockerCredentials } from './get-docker-credentials';

describe('get-docker-credentials', () => {
  const default_input = {
    certificate_id: `${Math.random()}`
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
    expect(typeof getDockerCredentials).toBe('function');
    expect(typeof getDockerCredentials(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getDockerCredentials = getDockerCredentials(context);
    await _getDockerCredentials(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/registry/docker-credentials`, {
      params: {
        read_write: false,
      }
    });
  });

  it('should send `can_write` and `expiry_seconds` query parameters', async () => {
    const _getDockerCredentials = getDockerCredentials(context);
    const input = {
      can_write: Math.random(),
      expiry_seconds: Math.random(),
    } as any;

    await _getDockerCredentials(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/registry/docker-credentials`, {
      params: {
        read_write: input.can_write,
        expiry_seconds: input.expiry_seconds,
      }
    });
  });

  it('should output axios response', async () => {
    const _getDockerCredentials = getDockerCredentials(context);
    const output = await _getDockerCredentials(default_input);

    expect(output).toBe(default_output);
  });
});
