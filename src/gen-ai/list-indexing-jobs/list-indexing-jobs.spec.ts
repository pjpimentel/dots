import { listIndexingJobs } from './list-indexing-jobs';

describe('list-indexing-jobs', () => {
  const default_input = { knowledge_base_uuid: 'kbid' } as any;
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
      `/gen-ai/knowledge_bases/${default_input.knowledge_base_uuid}/indexing_jobs`
    );
  });

  it('should output axios response', async () => {
    const _listIndexingJobs = listIndexingJobs(context);
    const output = await _listIndexingJobs(default_input);
    expect(output).toBe(default_output);
  });
}); 