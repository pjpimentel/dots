import { listDropletNeighborhoods } from './list-droplet-neighborhoods';

describe('list-droplet-neighborhoods', () => {
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
    expect(typeof listDropletNeighborhoods).toBe('function');
    expect(typeof listDropletNeighborhoods(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listDropletNeighborhoods = listDropletNeighborhoods(context);
    await _listDropletNeighborhoods({});

    expect(httpClient.get).toHaveBeenCalledWith(`/reports/droplet_neighbors_ids`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listDropletNeighborhoods = listDropletNeighborhoods(context);
    const input = {
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listDropletNeighborhoods(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/reports/droplet_neighbors_ids`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listDropletNeighborhoods = listDropletNeighborhoods(context);
    const output = await _listDropletNeighborhoods({});

    expect(output).toBe(default_output);
  });
});
