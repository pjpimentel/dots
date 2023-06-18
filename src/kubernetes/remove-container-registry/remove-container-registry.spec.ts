import { removeContainerRegistry } from './remove-container-registry';

describe('remove-container-registry', () => {
  const default_input = {
    cluster_uuids: Math.random(),
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
    expect(typeof removeContainerRegistry).toBe('function');
    expect(typeof removeContainerRegistry(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _removeContainerRegistry = removeContainerRegistry(context);
    await _removeContainerRegistry(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/kubernetes/clusters/registry`, {data: default_input});
  });

  it('should output axios response', async () => {
    const _removeContainerRegistry = removeContainerRegistry(context);
    const output = await _removeContainerRegistry(default_input);

    expect(output).toBe(default_output);
  });
});
