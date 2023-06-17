import { createDomain } from './create-domain';

describe('create-domain', () => {
  const default_input = {
    ip_address: Math.random(),
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
    expect(typeof createDomain).toBe('function');
    expect(typeof createDomain(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createDomain = createDomain(context);
    await _createDomain(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/domains`, default_input);
  });

  it('should output axios response', async () => {
    const _createDomain = createDomain(context);
    const output = await _createDomain(default_input);

    expect(output).toBe(default_output);
  });
});
