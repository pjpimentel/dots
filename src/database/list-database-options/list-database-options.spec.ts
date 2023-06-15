import { listDatabaseOptions } from './list-database-options';

describe('list-database-options', () => {
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
    expect(typeof listDatabaseOptions).toBe('function');
    expect(typeof listDatabaseOptions(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listDatabaseOptions = listDatabaseOptions(context);
    await _listDatabaseOptions();

    expect(httpClient.get).toHaveBeenCalledWith(`/databases/options`);
  });

  it('should output axios response', async () => {
    const _listDatabaseOptions = listDatabaseOptions(context);
    const output = await _listDatabaseOptions();

    expect(output).toBe(default_output);
  });
});
