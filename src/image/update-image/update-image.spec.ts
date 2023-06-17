import { updateImage } from './update-image';

describe('update-image', () => {
  const default_input = {
    description: Math.random(),
    distribution: Math.random(),
    image_id: Math.random(),
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
