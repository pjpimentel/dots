import { updateApp } from './update-app';

describe('update-app', () => {
  const default_input = {
    app_id: `${Math.random()}`,
    spec: `${Math.random()}`,
  } as any;
  const default_output = Math.random();

  const httpClient = {
    put: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.put.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof updateApp).toBe('function');
    expect(typeof updateApp(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateApp = updateApp(context);
    await _updateApp(default_input);

    expect(httpClient.put).toHaveBeenCalledWith(`/apps/${default_input.app_id}`, {
      spec: default_input.spec,
    });
  });

  it('should output axios response', async () => {
    const _updateApp = updateApp(context);
    const output = await _updateApp(default_input);

    expect(output).toBe(default_output);
  });
});
