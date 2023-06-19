import { updateImage } from './update-image';

describe('update-image', () => {
  const default_input = {
    description: require('crypto').randomBytes(2),
    distribution: require('crypto').randomBytes(2),
    image_id: require('crypto').randomBytes(2),
    name: require('crypto').randomBytes(2),
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
    expect(typeof updateImage).toBe('function');
    expect(typeof updateImage(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _updateImage = updateImage(context);
    await _updateImage(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/images/${default_input.image_id}`, {
      ...default_input,
      image_id: undefined,
    });
  });

  it('should output axios response', async () => {
    const _updateImage = updateImage(context);
    const output = await _updateImage(default_input);

    expect(output).toBe(default_output);
  });
});
