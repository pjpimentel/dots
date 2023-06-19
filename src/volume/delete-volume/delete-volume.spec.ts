import { deleteVolume } from './delete-volume';

describe('delete-volume', () => {
  const default_input = {
    region: require('crypto').randomBytes(2),
    volume_name: require('crypto').randomBytes(2),
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
    expect(typeof deleteVolume).toBe('function');
    expect(typeof deleteVolume(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteVolume = deleteVolume(context);
    await _deleteVolume(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/volumes/${default_input.volume_id}`);
  });

  it('should output axios response', async () => {
    const _deleteVolume = deleteVolume(context);
    const output = await _deleteVolume(default_input);

    expect(output).toBe(default_output);
  });
});
