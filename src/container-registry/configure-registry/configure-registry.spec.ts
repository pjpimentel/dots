import { configureRegistry } from './configure-registry';

describe('configure-registry', () => {
  const default_input = {
    name: Math.random(),
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
    expect(typeof configureRegistry).toBe('function');
    expect(typeof configureRegistry(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _configureRegistry = configureRegistry(context);
    await _configureRegistry(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/registry`, default_input);
  });

  it('should output axios response', async () => {
    const _configureRegistry = configureRegistry(context);
    const output = await _configureRegistry(default_input);

    expect(output).toBe(default_output);
  });
});
