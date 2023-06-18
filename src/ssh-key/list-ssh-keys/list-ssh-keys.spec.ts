import { listSshKeys } from './list-ssh-keys';

describe('list-ssh-keys', () => {
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
    expect(typeof listSshKeys).toBe('function');
    expect(typeof listSshKeys(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listSshKeys = listSshKeys(context);
    await _listSshKeys({});

    expect(httpClient.get).toHaveBeenCalledWith(`/account/keys`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listSshKeys = listSshKeys(context);
    const input = {
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listSshKeys(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/account/keys`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listSshKeys = listSshKeys(context);
    const output = await _listSshKeys({});

    expect(output).toBe(default_output);
  });
});
