import { getDropletAction } from './get-droplet-action';

describe('get-droplet-action', () => {
  const default_input = {
    droplet_id: require('crypto').randomBytes(2),
    action_id: require('crypto').randomBytes(2),
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
    expect(typeof getDropletAction).toBe('function');
    expect(typeof getDropletAction(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getDropletAction = getDropletAction(context);
    await _getDropletAction(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions/${default_input.action_id}`);
  });

  it('should output axios response', async () => {
    const _getDropletAction = getDropletAction(context);
    const output = await _getDropletAction(default_input);

    expect(output).toBe(default_output);
  });
});
