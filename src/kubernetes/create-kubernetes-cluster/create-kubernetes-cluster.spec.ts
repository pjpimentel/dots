import { createKubernetesCluster } from './create-kubernetes-cluster';

describe('create-kubernetes-cluster', () => {
  const default_input = {
    name: Math.random(),
    region: Math.random(),
    version: Math.random(),
    tags: Math.random(),
    auto_upgrade: Math.random(),
    maintenance_policy: Math.random(),
    node_pools: Math.random(),
    vpc_uuid: Math.random(),
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
    expect(typeof createKubernetesCluster).toBe('function');
    expect(typeof createKubernetesCluster(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createKubernetesCluster = createKubernetesCluster(context);
    await _createKubernetesCluster(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/kubernetes/clusters`, default_input);
  });

  it('should output axios response', async () => {
    const _createKubernetesCluster = createKubernetesCluster(context);
    const output = await _createKubernetesCluster(default_input);

    expect(output).toBe(default_output);
  });
});
