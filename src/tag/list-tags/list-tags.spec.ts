import { listTags } from './list-tags';

describe('list-tags', () => {
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
    expect(typeof listTags).toBe('function');
    expect(typeof listTags(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listTags = listTags(context);
    await _listTags({});

    expect(httpClient.get).toHaveBeenCalledWith(`/tags`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listTags = listTags(context);
    const input = {
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listTags(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/tags`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listTags = listTags(context);
    const output = await _listTags({});

    expect(output).toBe(default_output);
  });
});
