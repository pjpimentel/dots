import { deleteVpc } from './delete-vpc';

describe('delete-vpc', () => {
  const default_input = {
    vpc_id: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

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
    expect(typeof deleteVpc).toBe('function');
    expect(typeof deleteVpc(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteVpc = deleteVpc(context);
    await _deleteVpc(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/vpcs/${default_input.vpc_id}`);
  });

  it('should output axios response', async () => {
    const _deleteVpc = deleteVpc(context);
    const output = await _deleteVpc(default_input);

    expect(output).toBe(default_output);
  });
});
