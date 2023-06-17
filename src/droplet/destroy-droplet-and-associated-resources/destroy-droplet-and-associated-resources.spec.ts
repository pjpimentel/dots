import { destroyDropletAndAssociatedResources } from './destroy-droplet-and-associated-resources';

describe('destroy-droplet-and-associated-resources', () => {
  const default_input = {
    droplet_id: Math.random(),
    snapshots: Math.random(),
    volume_snapshots: Math.random(),
    volumes: Math.random(),
  } as any;
  const default_output = Math.random();

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
    expect(typeof destroyDropletAndAssociatedResources).toBe('function');
    expect(typeof destroyDropletAndAssociatedResources(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _destroyDropletAndAssociatedResources = destroyDropletAndAssociatedResources(context);
    await _destroyDropletAndAssociatedResources(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}/destroy_with_associated_resources/selective`, {
      data: {
        ...default_input,
        droplet_id: undefined,
      }
    });
  });

  it('should output axios response', async () => {
    const _destroyDropletAndAssociatedResources = destroyDropletAndAssociatedResources(context);
    const output = await _destroyDropletAndAssociatedResources(default_input);

    expect(output).toBe(default_output);
  });
});
