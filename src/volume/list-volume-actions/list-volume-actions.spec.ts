import { listVolumeActions } from './list-volume-actions';

describe('list-volume-actions', () => {
  const default_input = {
    volume_id: Math.random(),
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
    expect(typeof listVolumeActions).toBe('function');
    expect(typeof listVolumeActions(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listVolumeSnapshots = listVolumeActions(context);
    await _listVolumeSnapshots(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/volumes/${default_input.volume_id}/actions`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listVolumeSnapshots = listVolumeActions(context);
    const input = {
      ...default_input,
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listVolumeSnapshots(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/volumes/${default_input.volume_id}/actions`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listVolumeSnapshots = listVolumeActions(context);
    const output = await _listVolumeSnapshots(default_input);

    expect(output).toBe(default_output);
  });
});
