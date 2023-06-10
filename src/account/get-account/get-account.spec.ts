import {getAccount} from './get-account';

describe('get-account', () => {
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
    expect(typeof getAccount).toBe('function');
    expect(typeof getAccount(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getAccount = getAccount(context);
    await _getAccount();

    expect(httpClient.get).toHaveBeenCalledWith('/account');
  });

  it('should output axios response', async () => {
    const _getAccount = getAccount(context);

    const output = await _getAccount();

    expect(output).toBe(default_output);
  });
});
