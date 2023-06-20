import { listVolumeSnapshots } from './list-volume-snapshots';

describe('list-volume-snapshots', () => {
  const default_input = {
    volume_id: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

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
    expect(typeof listVolumeSnapshots).toBe('function');
    expect(typeof listVolumeSnapshots(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listVolumeSnapshots = listVolumeSnapshots(context);
    await _listVolumeSnapshots(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/volumes/${default_input.volume_id}/snapshots`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listVolumeSnapshots = listVolumeSnapshots(context);
    const input = {
      ...default_input,
      page: require('crypto').randomBytes(2),
      per_page: require('crypto').randomBytes(2),
    };
    await _listVolumeSnapshots(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/volumes/${default_input.volume_id}/snapshots`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listVolumeSnapshots = listVolumeSnapshots(context);
    const output = await _listVolumeSnapshots(default_input);

    expect(output).toBe(default_output);
  });
});
