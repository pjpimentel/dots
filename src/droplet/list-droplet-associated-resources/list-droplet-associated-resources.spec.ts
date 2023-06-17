import { listDropletAssociatedResources } from './list-droplet-associated-resources';

describe('list-droplet-associated-resources', () => {
  const default_input = {
    droplet_id: Math.random(),
  } as any;
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
    expect(typeof listDropletAssociatedResources).toBe('function');
    expect(typeof listDropletAssociatedResources(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listDropletAssociatedResources = listDropletAssociatedResources(context);
    await _listDropletAssociatedResources(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/destroy_with_associated_resources`);
  });

  it('should output axios response', async () => {
    const _listDropletAssociatedResources = listDropletAssociatedResources(context);
    const output = await _listDropletAssociatedResources(default_input);

    expect(output).toBe(default_output);
  });
});
