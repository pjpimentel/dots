import { snapshotDroplet } from './snapshot-droplet';

describe('snapshot-droplet', () => {
  const default_input = {
    droplet_id: Math.random(),
    name: Math.random(),
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
    expect(typeof snapshotDroplet).toBe('function');
    expect(typeof snapshotDroplet (context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _snapshotDroplet = snapshotDroplet(context);
    await _snapshotDroplet(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions`, {
      ...default_input,
      type: 'snapshot',
      droplet_id: undefined,
    });
  });

  it('should output axios response', async () => {
    const _snapshotDroplet = snapshotDroplet(context);
    const output = await _snapshotDroplet (default_input);

    expect(output).toBe(default_output);
  });
});
