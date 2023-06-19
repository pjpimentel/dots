import { deleteDomain } from './delete-domain';

describe('delete-domain', () => {
  const default_input = {
    name: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    delete: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.delete.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof deleteDomain).toBe('function');
    expect(typeof deleteDomain(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteDomain = deleteDomain(context);
    await _deleteDomain(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/domains/${default_input.name}`);
  });

  it('should output axios response', async () => {
    const _deleteDomain = deleteDomain(context);
    const output = await _deleteDomain(default_input);

    expect(output).toBe(default_output);
  });
});
