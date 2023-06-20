import { destroyDropletAndAllAssociatedResources } from './destroy-droplet-and-all-associated-resources';

describe('destroy-droplet-and-all-associated-resources', () => {
  const default_input = {
    droplet_id: require('crypto').randomBytes(2),
    acknowledge: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    delete: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.delete.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof destroyDropletAndAllAssociatedResources).toBe('function');
    expect(typeof destroyDropletAndAllAssociatedResources(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _destroyDropletAndAllAssociatedResources = destroyDropletAndAllAssociatedResources(context);
    await _destroyDropletAndAllAssociatedResources(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/destroy_with_associated_resources/dangerous`, {
      headers: {
        'X-Dangerous': default_input.acknowledge.toString()
      }
    });
  });

  it('should output axios response', async () => {
    const _destroyDropletAndAllAssociatedResources = destroyDropletAndAllAssociatedResources(context);
    const output = await _destroyDropletAndAllAssociatedResources(default_input);

    expect(output).toBe(default_output);
  });
});
