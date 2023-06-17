import { getImageAction } from './get-image-action';

describe('get-image-action', () => {
  const default_input = {
    image_id: Math.random(),
    action_id: Math.random(),
  } as any;
  const default_output = Math.random();

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
    expect(typeof getImageAction).toBe('function');
    expect(typeof getImageAction(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getImageAction = getImageAction(context);
    await _getImageAction(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/images/${default_input.image_id}/actions/${default_input.action_id}`);
  });

  it('should output axios response', async () => {
    const _getImageAction = getImageAction(context);
    const output = await _getImageAction(default_input);

    expect(output).toBe(default_output);
  });
});
