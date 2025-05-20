import { cancelIndexingJob } from './cancel-indexing-job';

describe('cancel-indexing-job', () => {
  const default_input = { 
    knowledge_base_uuid: 'kbid', 
    indexing_job_uuid: 'ijid' 
  } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { delete: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.delete.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof cancelIndexingJob).toBe('function');
    expect(typeof cancelIndexingJob(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _cancelIndexingJob = cancelIndexingJob(context);
    await _cancelIndexingJob(default_input);
    expect(httpClient.delete).toHaveBeenCalledWith(
      `/gen-ai/knowledge_bases/${default_input.knowledge_base_uuid}/indexing_jobs/${default_input.indexing_job_uuid}`
    );
  });

  it('should output axios response', async () => {
    const _cancelIndexingJob = cancelIndexingJob(context);
    const output = await _cancelIndexingJob(default_input);
    expect(output).toBe(default_output);
  });
}); 