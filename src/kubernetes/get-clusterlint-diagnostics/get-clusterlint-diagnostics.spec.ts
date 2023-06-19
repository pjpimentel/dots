import { getClusterlintDiagnostics } from './get-clusterlint-diagnostics';

describe('get-clusterlint-diagnostics', () => {
  const default_input = {
    kubernetes_cluster_id: require('crypto').randomBytes(2),
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
    expect(typeof getClusterlintDiagnostics).toBe('function');
    expect(typeof getClusterlintDiagnostics(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getClusterlintDiagnostics = getClusterlintDiagnostics(context);
    await _getClusterlintDiagnostics(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/kubernetes/clusters/${default_input.kubernetes_cluster_id}/clusterlint`);
  });

  it('should output axios response', async () => {
    const _getClusterlintDiagnostics = getClusterlintDiagnostics(context);
    const output = await _getClusterlintDiagnostics(default_input);

    expect(output).toBe(default_output);
  });
});
