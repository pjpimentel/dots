import { deleteDroplet } from './delete-droplet';

describe('delete-droplet', () => {
  const default_input = {
    droplet_id: Math.random(),
  } as any;
  const default_output = Math.random();

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
    expect(typeof deleteDroplet).toBe('function');
    expect(typeof deleteDroplet(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteDroplet = deleteDroplet(context);
    await _deleteDroplet(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/droplets/${default_input.droplet_id}`);
  });

  it('should output axios response', async () => {
    const _deleteDroplet = deleteDroplet(context);
    const output = await _deleteDroplet(default_input);

    expect(output).toBe(default_output);
  });
});
