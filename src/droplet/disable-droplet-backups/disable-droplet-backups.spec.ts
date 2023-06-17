import { disableDropletBackups } from './disable-droplet-backups';

describe('disable-droplet-backups', () => {
  const default_input = {
    droplet_id: Math.random(),
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
    expect(typeof disableDropletBackups).toBe('function');
    expect(typeof disableDropletBackups(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _enableDropletBackups = disableDropletBackups(context);
    await _enableDropletBackups(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions`, {
      ...default_input,
      type: 'disable_backups',
      droplet_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _enableDropletBackups = disableDropletBackups(context);
    const output = await _enableDropletBackups(default_input);

    expect(output).toBe(default_output);
  });
});
