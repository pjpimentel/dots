import { updateVpc } from './update-vpc';

describe('update-vpc', () => {
  const default_input = {
    description: Math.random(),
    is_default: Math.random(),
    name: Math.random(),
    vpc_id: Math.random(),
  } as any;
  const default_output = Math.random();

  const httpClient = {
    patch: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.patch.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof updateVpc).toBe('function');
    expect(typeof updateVpc(context)).toBe('function');
  });

  it('should call axios.patch', async () => {
    const _updateVpc = updateVpc(context);
    await _updateVpc(default_input);

    expect(httpClient.patch).toHaveBeenCalledWith(`/vpcs/${default_input.vpc_id}`, {
      default: default_input.is_default,
      description: default_input.description,
      name: default_input.name,
    });
  });

  it('should output axios response', async () => {
    const _updateVpc = updateVpc(context);
    const output = await _updateVpc(default_input);

    expect(output).toBe(default_output);
  });
});
