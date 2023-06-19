import { listFloatingIpActions } from './list-floating-ip-actions';

describe('list-floating-ip-actions', () => {
  const default_input = {
    ip: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

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
    expect(typeof listFloatingIpActions).toBe('function');
    expect(typeof listFloatingIpActions(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listFloatingIpActions = listFloatingIpActions(context);
    await _listFloatingIpActions(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/floating_ips/${default_input.ip}/actions`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listFloatingIpActions = listFloatingIpActions(context);
    const input = {
      ...default_input,
      page: require('crypto').randomBytes(2),
      per_page: require('crypto').randomBytes(2),
    } as any;
    await _listFloatingIpActions(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/floating_ips/${default_input.ip}/actions`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listFloatingIpActions = listFloatingIpActions(context);
    const output = await _listFloatingIpActions(default_input);

    expect(output).toBe(default_output);
  });
});
