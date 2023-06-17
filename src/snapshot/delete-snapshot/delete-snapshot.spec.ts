import { deleteSnapshot } from './delete-snapshot';

describe('delete-snapshot', () => {
  const default_input = {
    snapshot_id: Math.random(),
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
    expect(typeof deleteSnapshot).toBe('function');
    expect(typeof deleteSnapshot(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteSnapshot = deleteSnapshot(context);
    await _deleteSnapshot(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/snapshots/${default_input.snapshot_id}`);
  });

  it('should output axios response', async () => {
    const _deleteSnapshot = deleteSnapshot(context);
    const output = await _deleteSnapshot(default_input);

    expect(output).toBe(default_output);
  });
});
