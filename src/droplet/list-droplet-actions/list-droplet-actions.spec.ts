import { listDropletActions } from './list-droplet-actions';

describe('list-droplet-actions', () => {
  const default_input = {
    droplet_id: require('crypto').randomBytes(2),
  } as any;
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
    expect(typeof listDropletActions).toBe('function');
    expect(typeof listDropletActions(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listDropletActions = listDropletActions(context);
    await _listDropletActions(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listDropletActions = listDropletActions(context);
    const input = {
      ...default_input,
      page: require('crypto').randomBytes(2),
      per_page: require('crypto').randomBytes(2),
    };
    await _listDropletActions(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/actions`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listDropletActions = listDropletActions(context);
    const output = await _listDropletActions(default_input);

    expect(output).toBe(default_output);
  });
});
