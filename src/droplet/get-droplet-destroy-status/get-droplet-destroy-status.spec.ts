import { getDropletDestroyStatus } from './get-droplet-destroy-status';

describe('get-droplet-destroy-status', () => {
  const default_input = {
    droplet_id: Math.random(),
    action_id: Math.random(),
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
    expect(typeof getDropletDestroyStatus).toBe('function');
    expect(typeof getDropletDestroyStatus(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getDropletDestroyStatus = getDropletDestroyStatus(context);
    await _getDropletDestroyStatus(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/destroy_with_associated_resources/status`);
  });

  it('should output axios response', async () => {
    const _getDropletDestroyStatus = getDropletDestroyStatus(context);
    const output = await _getDropletDestroyStatus(default_input);

    expect(output).toBe(default_output);
  });
});
