import { createKubernetesCluster } from './create-kubernetes-cluster';

describe('create-kubernetes-cluster', () => {
  const default_input = {
    name: require('crypto').randomBytes(2),
    region: require('crypto').randomBytes(2),
    version: require('crypto').randomBytes(2),
    tags: require('crypto').randomBytes(2),
    auto_upgrade: require('crypto').randomBytes(2),
    maintenance_policy: require('crypto').randomBytes(2),
    node_pools: require('crypto').randomBytes(2),
    vpc_uuid: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

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
