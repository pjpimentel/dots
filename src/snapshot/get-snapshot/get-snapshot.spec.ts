import { getSnapshot } from './get-snapshot';

describe('get-snapshot', () => {
  const default_input = {
    snapshot_id: Math.random(),
    slug: Math.random(),
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
    expect(typeof getSnapshot).toBe('function');
    expect(typeof getSnapshot(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getSnapshot = getSnapshot(context);
    await _getSnapshot(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/snapshots/${default_input.snapshot_id}`);
  });

  it('should output axios response', async () => {
    const _getSnapshot = getSnapshot(context);
    const output = await _getSnapshot(default_input);

    expect(output).toBe(default_output);
  });
});
