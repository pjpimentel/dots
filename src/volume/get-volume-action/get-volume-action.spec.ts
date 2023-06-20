import { getVolumeAction } from './get-volume-action';

describe('get-volume-action', () => {
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
    expect(typeof getVolumeAction).toBe('function');
    expect(typeof getVolumeAction(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getVolumeAction = getVolumeAction(context);
    await _getVolumeAction(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/volumes/${default_input.volume_id}/actions/${default_input.action_id}`);
  });

  it('should output axios response', async () => {
    const _getVolumeAction = getVolumeAction(context);
    const output = await _getVolumeAction(default_input);

    expect(output).toBe(default_output);
  });
});
