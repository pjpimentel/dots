import { createVpc } from './create-vpc';

describe('create-vpc', () => {
  const default_input = {
    description: require('crypto').randomBytes(2),
    ip_range: require('crypto').randomBytes(2),
    is_default: require('crypto').randomBytes(2),
    name: require('crypto').randomBytes(2),
    region: require('crypto').randomBytes(2),
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
