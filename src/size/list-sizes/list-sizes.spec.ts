import { listSizes } from './list-sizes';

describe('list-sizes', () => {
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
    expect(typeof listSizes).toBe('function');
    expect(typeof listSizes(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listSizes = listSizes(context);
    await _listSizes({});

    expect(httpClient.get).toHaveBeenCalledWith(`/sizes`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listSizes = listSizes(context);
    const input = {
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listSizes(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/sizes`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listSizes = listSizes(context);
    const output = await _listSizes({});

    expect(output).toBe(default_output);
  });
});
