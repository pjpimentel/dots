import { getImage } from './get-image';

describe('get-image', () => {
  const default_input = {
    image_id: require('crypto').randomBytes(2),
    slug: require('crypto').randomBytes(2),
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
    expect(typeof getImage).toBe('function');
    expect(typeof getImage(context)).toBe('function');
  });

  it('should call axios.get with `image_id`', async () => {
    const _getFloatingIp = getImage(context);
    await _getFloatingIp(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/images/${default_input.image_id}`);
  });

  it('should call axios.get with `slug`', async () => {
    const _getFloatingIp = getImage(context);
    await _getFloatingIp({
      slug: default_input.slug
    });

    expect(httpClient.get).toHaveBeenCalledWith(`/images/${default_input.slug}`);
  });

  it('should output axios response', async () => {
    const _getFloatingIp = getImage(context);
    const output = await _getFloatingIp(default_input);

    expect(output).toBe(default_output);
  });
});
