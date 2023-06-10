import { createApp } from './create-app';

describe('create-app', () => {
  const default_input = {
    project_id: `${Math.random()}`,
    spec: `${Math.random()}`,
  } as any;
  const default_output = Math.random();

  const httpClient = {
    post: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.post.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof createApp).toBe('function');
    expect(typeof createApp(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createApp = createApp(context);
    await _createApp(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/apps`, default_input);
  });

  it('should output axios response', async () => {
    const _createApp = createApp(context);
    const output = await _createApp(default_input);

    expect(output).toBe(default_output);
  });
});
