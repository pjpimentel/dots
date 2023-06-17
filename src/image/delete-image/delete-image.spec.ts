import { deleteImage } from './delete-image';

describe('delete-image', () => {
  const default_input = {
    image_id: Math.random(),
  } as any;
  const default_output = Math.random();

  const httpClient = {
    delete: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.delete.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof deleteImage).toBe('function');
    expect(typeof deleteImage(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteImage = deleteImage(context);
    await _deleteImage(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/images/${default_input.image_id}`);
  });

  it('should output axios response', async () => {
    const _deleteImage = deleteImage(context);
    const output = await _deleteImage(default_input);

    expect(output).toBe(default_output);
  });
});
