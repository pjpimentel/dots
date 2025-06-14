import { listIndexingJobs } from './list-indexing-jobs';

describe('list-indexing-jobs', () => {
  const default_input = { page: 2, per_page: 10 } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { get: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.get.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof listIndexingJobs).toBe('function');
    expect(typeof listIndexingJobs(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listIndexingJobs = listIndexingJobs(context);
    await _listIndexingJobs(default_input);
    expect(httpClient.get).toHaveBeenCalledWith(
      `/gen-ai/indexing_jobs`,
      { params: { page: 2, per_page: 10 } }
    );
  });

  it('should use default pagination when not provided', async () => {
    const _listIndexingJobs = listIndexingJobs(context);
    await _listIndexingJobs({ knowledge_base_uuid: 'kbid2' } as any);
    expect(httpClient.get).toHaveBeenCalledWith(
      `/gen-ai/indexing_jobs`,
      { params: { page: 1, per_page: 25 } }
    );
  });

  it('should output axios response', async () => {
    const _listIndexingJobs = listIndexingJobs(context);
    const output = await _listIndexingJobs(default_input);
    expect(output).toBe(default_output);
  });
});
