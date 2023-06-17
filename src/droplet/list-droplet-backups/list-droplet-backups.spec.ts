import { listDropletBackups } from './list-droplet-backups';

describe('list-droplet-backups', () => {
  const default_input = {
    droplet_id: Math.random(),
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
    expect(typeof listDropletBackups).toBe('function');
    expect(typeof listDropletBackups(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listDropletBackups = listDropletBackups(context);
    await _listDropletBackups(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/backups`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listDropletBackups = listDropletBackups(context);
    const input = {
      ...default_input,
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listDropletBackups(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/backups`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listDropletBackups = listDropletBackups(context);
    const output = await _listDropletBackups(default_input);

    expect(output).toBe(default_output);
  });
});
