import { createVpc } from './create-vpc';

describe('create-vpc', () => {
  const default_input = {
    description: Math.random(),
    ip_range: Math.random(),
    is_default: Math.random(),
    name: Math.random(),
    region: Math.random(),
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
    expect(typeof createVpc).toBe('function');
    expect(typeof createVpc(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createVpc = createVpc(context);
    await _createVpc(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/vpcs`, {
      default: default_input.is_default,
      description: default_input.description,
      ip_range: default_input.ip_range,
      name: default_input.name,
      region: default_input.region,
    });
  });

  it('should output axios response', async () => {
    const _createVpc = createVpc(context);
    const output = await _createVpc(default_input);

    expect(output).toBe(default_output);
  });
});
