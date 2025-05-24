import { listKnowledgeBaseDataSources } from './list-knowledge-base-data-sources';

describe('list-knowledge-base-data-sources', () => {
  const default_input = { knowledge_base_uuid: 'kbid' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { get: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.get.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof listKnowledgeBaseDataSources).toBe('function');
    expect(typeof listKnowledgeBaseDataSources(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listKnowledgeBaseDataSources = listKnowledgeBaseDataSources(context);
    await _listKnowledgeBaseDataSources(default_input);
    expect(httpClient.get).toHaveBeenCalledWith(
      `/gen-ai/knowledge_bases/${default_input.knowledge_base_uuid}/data_sources`,
      { params: { page: 1, per_page: 25 } },
    );
    await _listKnowledgeBaseDataSources({...default_input, page: 2, per_page: 5 });
    expect(httpClient.get).toHaveBeenCalledWith(
      `/gen-ai/knowledge_bases/${default_input.knowledge_base_uuid}/data_sources`,
      { params: { page: 2, per_page: 5 } },
    );
  });

  it('should output axios response', async () => {
    const _listKnowledgeBaseDataSources = listKnowledgeBaseDataSources(context);
    const output = await _listKnowledgeBaseDataSources(default_input);
    expect(output).toBe(default_output);
  });
});
