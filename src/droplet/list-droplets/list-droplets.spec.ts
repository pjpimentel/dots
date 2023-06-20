import { listDroplets } from './list-droplets';

describe('list-droplets', () => {
  const default_output = require('crypto').randomBytes(2);

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
    expect(typeof listDroplets).toBe('function');
    expect(typeof listDroplets(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listDroplets = listDroplets(context);
    await _listDroplets({});

    expect(httpClient.get).toHaveBeenCalledWith(`/droplets`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page`, `per_page` and `tag_name` input', async () => {
    const _listDroplets = listDroplets(context);
    const input = {
      tag_name: require('crypto').randomBytes(2),
      page: require('crypto').randomBytes(2),
      per_page: require('crypto').randomBytes(2),
    } as any;
    await _listDroplets(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/droplets`, {
      params: {
        page: input.page,
        per_page: input.per_page,
        tag_name: input.tag_name,
      },
    });
  });

  it('should output axios response', async () => {
    const _listDroplets = listDroplets(context);
    const output = await _listDroplets({});

    expect(output).toBe(default_output);
  });
});
