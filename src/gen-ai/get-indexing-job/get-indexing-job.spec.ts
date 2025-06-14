import { getIndexingJob } from './get-indexing-job';

describe('get-indexing-job', () => {
  const default_input = {
    indexing_job_uuid: 'ijid'
  } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { get: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.get.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof getIndexingJob).toBe('function');
    expect(typeof getIndexingJob(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getIndexingJob = getIndexingJob(context);
    await _getIndexingJob(default_input);
    expect(httpClient.get).toHaveBeenCalledWith(
      `/gen-ai/indexing_jobs/${default_input.indexing_job_uuid}`
    );
  });

  it('should output axios response', async () => {
    const _getIndexingJob = getIndexingJob(context);
    const output = await _getIndexingJob(default_input);
    expect(output).toBe(default_output);
  });
});
