import { getRegistry } from './get-registry';

describe('get-registry', () => {
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
    expect(typeof getRegistry).toBe('function');
    expect(typeof getRegistry(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getRegistry = getRegistry(context);
    await _getRegistry();

    expect(httpClient.get).toHaveBeenCalledWith(`/registry`);
  });

  it('should output axios response', async () => {
    const _getRegistry = getRegistry(context);
    const output = await _getRegistry();

    expect(output).toBe(default_output);
  });
});
