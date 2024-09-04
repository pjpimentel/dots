import { createDroplet } from './create-droplet';

describe('create-droplet', () => {
  const default_input = {
    backups: require('crypto').randomBytes(2),
    image: require('crypto').randomBytes(2),
    ipv6: require('crypto').randomBytes(2),
    monitoring: require('crypto').randomBytes(2),
    name: require('crypto').randomBytes(2),
    private_networking: require('crypto').randomBytes(2),
    region: require('crypto').randomBytes(2),
    size: require('crypto').randomBytes(2),
    ssh_keys: require('crypto').randomBytes(2),
    tags: require('crypto').randomBytes(2),
    user_data: require('crypto').randomBytes(2),
    volumes: require('crypto').randomBytes(2),
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
    expect(typeof createDroplet).toBe('function');
    expect(typeof createDroplet(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createDroplet = createDroplet(context);
    await _createDroplet(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets`, default_input);
  });

  it('should output axios response', async () => {
    const _createDroplet = createDroplet(context);
    const output = await _createDroplet(default_input);

    expect(output).toBe(default_output);
  });

  it('should allow empty region input', async () => {
    const _createDroplet = createDroplet(context);
    const input = {
      ...default_input,
      region: undefined,
    }
    await _createDroplet(input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets`, input);
  });
});
