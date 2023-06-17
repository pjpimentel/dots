import { listSnapshots } from './list-snapshots';

describe('list-snapshots', () => {
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
      page: Math.random(),
      per_page: Math.random(),
      resource_type: Math.random(),
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
