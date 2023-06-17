import { listFirewalls } from './list-firewalls';

describe('list-firewalls', () => {
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
    expect(typeof listFirewalls).toBe('function');
    expect(typeof listFirewalls(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listFirewalls = listFirewalls(context);
    await _listFirewalls({});

    expect(httpClient.get).toHaveBeenCalledWith(`/firewalls`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listFirewalls = listFirewalls(context);
    const input = {
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listFirewalls(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/firewalls`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listFirewalls = listFirewalls(context);
    const output = await _listFirewalls({});

    expect(output).toBe(default_output);
  });
});
