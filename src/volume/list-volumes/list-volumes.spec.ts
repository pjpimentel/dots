import { listVolumes } from './list-volumes';

describe('list-volumes', () => {
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
    expect(typeof listVolumes).toBe('function');
    expect(typeof listVolumes(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listVolumes = listVolumes(context);
    await _listVolumes({});

    expect(httpClient.get).toHaveBeenCalledWith(`/volumes`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page`, `per_page` and `name` input', async () => {
    const _listVolumes = listVolumes(context);
    const input = {
      name: require('crypto').randomBytes(2),
      page: require('crypto').randomBytes(2),
      per_page: require('crypto').randomBytes(2),
    } as any;
    await _listVolumes(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/volumes`, {
      params: {
        name: input.name,
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listVolumes = listVolumes(context);
    const output = await _listVolumes({});

    expect(output).toBe(default_output);
  });
});
