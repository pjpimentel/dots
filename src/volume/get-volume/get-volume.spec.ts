import { getVolume } from './get-volume';

describe('get-volume', () => {
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
    expect(typeof getVolume).toBe('function');
    expect(typeof getVolume(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getVolume = getVolume(context);
    await _getVolume(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/volumes/${default_input.volume_id}`);
  });

  it('should output axios response', async () => {
    const _getVolume = getVolume(context);
    const output = await _getVolume(default_input);

    expect(output).toBe(default_output);
  });
});
