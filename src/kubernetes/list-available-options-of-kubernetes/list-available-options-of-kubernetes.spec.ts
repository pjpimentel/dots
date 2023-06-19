import { listAvailableOptionsOfKubernetes } from './list-available-options-of-kubernetes';

describe('list-available-options-of-kubernetes', () => {
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
    expect(typeof listAvailableOptionsOfKubernetes).toBe('function');
    expect(typeof listAvailableOptionsOfKubernetes(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listAvailableOptionsOfKubernetes = listAvailableOptionsOfKubernetes(context);
    await _listAvailableOptionsOfKubernetes();

    expect(httpClient.get).toHaveBeenCalledWith(`/kubernetes/options`);
  });

  it('should output axios response', async () => {
    const _listAvailableOptionsOfKubernetes = listAvailableOptionsOfKubernetes(context);
    const output = await _listAvailableOptionsOfKubernetes();

    expect(output).toBe(default_output);
  });
});
