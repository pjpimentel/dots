import { listSnapshots } from './list-snapshots';

describe('list-snapshots', () => {
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
    expect(typeof listSnapshots).toBe('function');
    expect(typeof listSnapshots(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listSnapshots = listSnapshots(context);
    await _listSnapshots({});

    expect(httpClient.get).toHaveBeenCalledWith(`/snapshots`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page`, `per_page` and `resource_type` input', async () => {
    const _listSnapshots = listSnapshots(context);
    const input = {
      page: require('crypto').randomBytes(2),
      per_page: require('crypto').randomBytes(2),
      resource_type: require('crypto').randomBytes(2),
    } as any;
    await _listSnapshots(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/snapshots`, {
      params: {
        page: input.page,
        per_page: input.per_page,
        resource_type: input.resource_type,
      },
    });
  });

  it('should output axios response', async () => {
    const _listSnapshots = listSnapshots(context);
    const output = await _listSnapshots({});

    expect(output).toBe(default_output);
  });
});
