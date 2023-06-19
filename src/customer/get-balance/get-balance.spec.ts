import { getBalance } from './get-balance';

describe('get-balance', () => {
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
    expect(typeof getBalance).toBe('function');
    expect(typeof getBalance(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getBalance = getBalance(context);
    await _getBalance();

    expect(httpClient.get).toHaveBeenCalledWith(`/customers/my/balance`);
  });

  it('should output axios response', async () => {
    const _getBalance = getBalance(context);
    const output = await _getBalance();

    expect(output).toBe(default_output);
  });
});
