import { cancelIndexingJob } from './cancel-indexing-job';

describe('cancel-indexing-job', () => {
  const default_input = {
    indexing_job_uuid: 'ijid'
  } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { put: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.put.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof cancelIndexingJob).toBe('function');
    expect(typeof cancelIndexingJob(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _cancelIndexingJob = cancelIndexingJob(context);
    await _cancelIndexingJob(default_input);
    expect(httpClient.put).toHaveBeenCalledWith(
      `/gen-ai/indexing_jobs/${default_input.indexing_job_uuid}/cancel`
    );
  });

  it('should output axios response', async () => {
    const _cancelIndexingJob = cancelIndexingJob(context);
    const output = await _cancelIndexingJob(default_input);
    expect(output).toBe(default_output);
  });
});
