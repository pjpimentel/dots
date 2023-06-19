import { getDroplet } from './get-droplet';

describe('get-droplet', () => {
  const default_input = {
    droplet_id: require('crypto').randomBytes(2),
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
    expect(typeof getDroplet).toBe('function');
    expect(typeof getDroplet(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getDroplet = getDroplet(context);
    await _getDroplet(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}`);
  });

  it('should output axios response', async () => {
    const _getDroplet = getDroplet(context);
    const output = await _getDroplet(default_input);

    expect(output).toBe(default_output);
  });
});
