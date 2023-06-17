import { createDroplet } from './create-droplet';

describe('create-droplet', () => {
  const default_input = {
    backups: Math.random(),
    image: Math.random(),
    ipv6: Math.random(),
    monitoring: Math.random(),
    name: Math.random(),
    private_networking: Math.random(),
    region: Math.random(),
    size: Math.random(),
    ssh_keys: Math.random(),
    tags: Math.random(),
    user_data: Math.random(),
    volumes: Math.random(),
    vpc_uuid: Math.random(),
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
});
