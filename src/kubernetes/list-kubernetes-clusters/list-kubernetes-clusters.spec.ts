import { listKubernetesClusters } from './list-kubernetes-clusters';

describe('list-kubernetes-clusters', () => {
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
    expect(typeof listKubernetesClusters).toBe('function');
    expect(typeof listKubernetesClusters(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listKubernetesClusters = listKubernetesClusters(context);
    await _listKubernetesClusters({});

    expect(httpClient.get).toHaveBeenCalledWith(`/kubernetes/clusters`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listKubernetesClusters = listKubernetesClusters(context);
    const input = {
      page: Math.random(),
      per_page: Math.random(),
    } as any;
    await _listKubernetesClusters(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/kubernetes/clusters`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listKubernetesClusters = listKubernetesClusters(context);
    const output = await _listKubernetesClusters({});

    expect(output).toBe(default_output);
  });
});
