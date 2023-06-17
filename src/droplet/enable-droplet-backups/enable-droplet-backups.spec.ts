import { enableDropletBackups } from './enable-droplet-backups';

describe('enable-droplet-backups', () => {
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
    expect(typeof enableDropletBackups).toBe('function');
    expect(typeof enableDropletBackups(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _enableDropletBackups = enableDropletBackups(context);
    await _enableDropletBackups(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions`, {
      ...default_input,
      type: 'enable_backups',
      droplet_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _enableDropletBackups = enableDropletBackups(context);
    const output = await _enableDropletBackups(default_input);

    expect(output).toBe(default_output);
  });
});
