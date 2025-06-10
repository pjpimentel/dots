import { createIndexingJob } from './create-indexing-job';

describe('create-indexing-job', () => {
  const default_input = { knowledge_base_uuid: 'kbid', data_source_uuids: ['ds_uuid'] } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { post: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.post.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof createIndexingJob).toBe('function');
    expect(typeof createIndexingJob(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createIndexingJob = createIndexingJob(context);
    await _createIndexingJob(default_input);
    expect(httpClient.post).toHaveBeenCalledWith(`/gen-ai/indexing_jobs`, default_input);
  });

  it('should output axios response', async () => {
    const _createIndexingJob = createIndexingJob(context);
    const output = await _createIndexingJob(default_input);
    expect(output).toBe(default_output);
  });
}); 