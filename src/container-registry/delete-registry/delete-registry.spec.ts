import { deleteRegistry } from './delete-registry';

describe('delete-registry', () => {
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
    expect(typeof deleteRegistry).toBe('function');
    expect(typeof deleteRegistry(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteRegistry = deleteRegistry(context);
    await _deleteRegistry();

    expect(httpClient.delete).toHaveBeenCalledWith(`/registry`);
  });

  it('should output axios response', async () => {
    const _deleteRegistry = deleteRegistry(context);
    const output = await _deleteRegistry();

    expect(output).toBe(default_output);
  });
});
