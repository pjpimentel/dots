import { getVpc } from './get-vpc';

describe('get-vpc', () => {
  const default_input = {
    vpc_id: Math.random(),
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
    expect(typeof getVpc).toBe('function');
    expect(typeof getVpc(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getVpc = getVpc(context);
    await _getVpc(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/vpcs/${default_input.vpc_id}`);
  });

  it('should output axios response', async () => {
    const _getVpc = getVpc(context);
    const output = await _getVpc(default_input);

    expect(output).toBe(default_output);
  });
});
