import { transferImage } from './transfer-image';

describe('transfer-image', () => {
  const default_input = {
    image_id: Math.random(),
    region: Math.random(),
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
    expect(typeof transferImage).toBe('function');
    expect(typeof transferImage(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _transferImage = transferImage(context);
    await _transferImage(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/images/${default_input.image_id}/actions`, {
      ...default_input,
      image_id: undefined,
      type: 'transfer'
    });
  });

  it('should output axios response', async () => {
    const _transferImage = transferImage(context);
    const output = await _transferImage(default_input);

    expect(output).toBe(default_output);
  });
});
