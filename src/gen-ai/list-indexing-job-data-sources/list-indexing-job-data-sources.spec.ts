import { listIndexingJobDataSources } from './list-indexing-job-data-sources';

describe('list-indexing-job-data-sources', () => {
  const default_input = { indexing_job_uuid: 'ijid' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { get: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.get.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof listIndexingJobDataSources).toBe('function');
    expect(typeof listIndexingJobDataSources(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listIndexingJobDataSources = listIndexingJobDataSources(context);
    await _listIndexingJobDataSources(default_input);
    expect(httpClient.get).toHaveBeenCalledWith(
      `/gen-ai/indexing_jobs/${default_input.indexing_job_uuid}/data_sources`
    );
  });

  it('should output axios response', async () => {
    const _listIndexingJobDataSources = listIndexingJobDataSources(context);
    const output = await _listIndexingJobDataSources(default_input);
    expect(output).toBe(default_output);
  });
}); 