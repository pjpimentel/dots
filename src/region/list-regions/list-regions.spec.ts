import { listRegions } from './list-regions';

describe('list-regions', () => {
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
    expect(typeof listRegions).toBe('function');
    expect(typeof listRegions(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listRegions = listRegions(context);
    await _listRegions({});

    expect(httpClient.get).toHaveBeenCalledWith(`/regions`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listRegions = listRegions(context);
    const input = {
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listRegions(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/regions`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listRegions = listRegions(context);
    const output = await _listRegions({});

    expect(output).toBe(default_output);
  });
});
