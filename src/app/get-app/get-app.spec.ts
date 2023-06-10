import { getApp } from './get-app';

describe('get-app', () => {
  const default_input = {
    app_id: `${Math.random()}`
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
    expect(typeof getApp).toBe('function');
    expect(typeof getApp(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getApp = getApp(context);
    await _getApp(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/apps/${default_input.app_id}`);
  });

  it('should output axios response', async () => {
    const _getApp = getApp(context);
    const output = await _getApp(default_input);

    expect(output).toBe(default_output);
  });
});
