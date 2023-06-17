import { createCustomImage } from './create-custom-image';

describe('create-custom-image', () => {
  const default_input = {
    description: Math.random(),
    distribution: Math.random(),
    name: Math.random(),
    region: Math.random(),
    tags: Math.random(),
    url: Math.random(),
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
