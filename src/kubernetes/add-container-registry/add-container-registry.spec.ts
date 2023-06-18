import { addContainerRegistry } from './add-container-registry';

describe('add-container-registry', () => {
  const default_input = {
    cluster_uuids: Math.random(),
  } as any;
  const default_output = Math.random();

  const httpClient = {
    post: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.post.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof addContainerRegistry).toBe('function');
    expect(typeof addContainerRegistry(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _addContainerRegistry = addContainerRegistry(context);
    await _addContainerRegistry(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/kubernetes/clusters/registry`, default_input);
  });

  it('should output axios response', async () => {
    const _addContainerRegistry = addContainerRegistry(context);
    const output = await _addContainerRegistry(default_input);

    expect(output).toBe(default_output);
  });
});
