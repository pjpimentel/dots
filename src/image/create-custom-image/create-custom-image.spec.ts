import { createCustomImage } from './create-custom-image';

describe('create-custom-image', () => {
  const default_input = {
    description: require('crypto').randomBytes(2),
    distribution: require('crypto').randomBytes(2),
    name: require('crypto').randomBytes(2),
    region: require('crypto').randomBytes(2),
    tags: require('crypto').randomBytes(2),
    url: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

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
    expect(typeof createCustomImage).toBe('function');
    expect(typeof createCustomImage(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createCustomImage = createCustomImage(context);
    await _createCustomImage(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/images`, default_input);
  });

  it('should output axios response', async () => {
    const _createCustomImage = createCustomImage(context);
    const output = await _createCustomImage(default_input);

    expect(output).toBe(default_output);
  });
});
