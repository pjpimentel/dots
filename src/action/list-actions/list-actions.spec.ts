import { listActions } from './list-actions';

describe('list-actions', () => {
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
    expect(typeof listActions).toBe('function');
    expect(typeof listActions(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listActions = listActions(context);
    await _listActions({});

    expect(httpClient.get).toHaveBeenCalledWith(`/actions`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listActions = listActions(context);
    const input = {
      page: Math.random(),
      per_page: Math.random(),
    }
    await _listActions(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/actions`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listActions = listActions(context);
    const output = await _listActions({});

    expect(output).toBe(default_output);
  });
});
