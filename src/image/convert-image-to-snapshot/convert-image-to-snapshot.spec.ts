import { convertImageToSnapshot } from './convert-image-to-snapshot';

describe('convert-image-to-snapshot', () => {
  const default_input = {
    image_id: Math.random(),
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
    expect(typeof convertImageToSnapshot).toBe('function');
    expect(typeof convertImageToSnapshot(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _convertImageToSnapshot = convertImageToSnapshot(context);
    await _convertImageToSnapshot(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/images/${default_input.image_id}/actions`, {
      ...default_input,
      image_id: undefined,
      type: 'convert'
    });
  });

  it('should output axios response', async () => {
    const _convertImageToSnapshot = convertImageToSnapshot(context);
    const output = await _convertImageToSnapshot(default_input);

    expect(output).toBe(default_output);
  });
});
