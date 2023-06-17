import { listImageActions } from './list-image-actions';

describe('list-image-actions', () => {
  const default_input = {
    image_id: Math.random(),
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
    expect(typeof listImageActions).toBe('function');
    expect(typeof listImageActions(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listImageActions = listImageActions(context);
    await _listImageActions(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/images/${default_input.image_id}/actions`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listImageActions = listImageActions(context);
    const input = {
      ...default_input,
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listImageActions(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/images/${default_input.image_id}/actions`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listImageActions = listImageActions(context);
    const output = await _listImageActions(default_input);

    expect(output).toBe(default_output);
  });
});
