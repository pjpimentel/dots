import { getDomain } from './get-domain';

describe('get-domain', () => {
  const default_input = {
    name: Math.random(),
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
    expect(typeof getDomain).toBe('function');
    expect(typeof getDomain(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getDomain = getDomain(context);
    await _getDomain(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/domains/${default_input.name}`);
  });

  it('should output axios response', async () => {
    const _getDomain = getDomain(context);
    const output = await _getDomain(default_input);

    expect(output).toBe(default_output);
  });
});
