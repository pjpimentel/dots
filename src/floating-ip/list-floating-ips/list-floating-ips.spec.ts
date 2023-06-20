import { listFloatingIps } from './list-floating-ips';

describe('list-floating-ips', () => {
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
    expect(typeof listFloatingIps).toBe('function');
    expect(typeof listFloatingIps(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listFloatingIps = listFloatingIps(context);
    await _listFloatingIps({});

    expect(httpClient.get).toHaveBeenCalledWith(`/floating_ips`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listFloatingIps = listFloatingIps(context);
    const input = {
      page: require('crypto').randomBytes(2),
      per_page: require('crypto').randomBytes(2),
    } as any;
    await _listFloatingIps(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/floating_ips`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listFloatingIps = listFloatingIps(context);
    const output = await _listFloatingIps({});

    expect(output).toBe(default_output);
  });
});
