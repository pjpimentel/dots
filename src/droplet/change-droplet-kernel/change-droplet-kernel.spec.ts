import { changeDropletKernel } from './change-droplet-kernel';

describe('change-droplet-kernel', () => {
  const default_input = {
    droplet_id: Math.random(),
    kernel: Math.random(),
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
    expect(typeof changeDropletKernel).toBe('function');
    expect(typeof changeDropletKernel(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _changeDropletKernel = changeDropletKernel(context);
    await _changeDropletKernel(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions`, {
      ...default_input,
      type: 'change_kernel',
      droplet_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _changeDropletKernel = changeDropletKernel(context);
    const output = await _changeDropletKernel(default_input);

    expect(output).toBe(default_output);
  });
});
