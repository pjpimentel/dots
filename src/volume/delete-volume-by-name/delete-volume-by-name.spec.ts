import { deleteVolumeByName } from './delete-volume-by-name';

describe('delete-volume-by-name', () => {
  const default_input = {
    region: Math.random(),
    volume_name: Math.random(),
  } as any;
  const default_output = Math.random();

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
    expect(typeof deleteVolumeByName).toBe('function');
    expect(typeof deleteVolumeByName(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteVolumeByName = deleteVolumeByName(context);
    await _deleteVolumeByName(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/volumes`, {
      params: {
        name: default_input.volume_name,
        region: default_input.region,
      }
    });
  });

  it('should output axios response', async () => {
    const _deleteVolumeByName = deleteVolumeByName(context);
    const output = await _deleteVolumeByName(default_input);

    expect(output).toBe(default_output);
  });
});
