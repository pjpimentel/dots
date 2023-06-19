import { deleteApp } from './delete-app';

describe('delete-app', () => {
  const default_input = {
    app_id: `${require('crypto').randomBytes(2)}`,
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
    expect(typeof deleteApp).toBe('function');
    expect(typeof deleteApp(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteApp = deleteApp(context);
    await _deleteApp(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/apps/${default_input.app_id}`);
  });

  it('should output axios response', async () => {
    const _deleteApp = deleteApp(context);
    const output = await _deleteApp(default_input);

    expect(output).toBe(default_output);
  });
});
