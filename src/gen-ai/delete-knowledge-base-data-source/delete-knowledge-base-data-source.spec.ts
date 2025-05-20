import { deleteKnowledgeBaseDataSource } from './delete-knowledge-base-data-source';

describe('delete-knowledge-base-data-source', () => {
  const default_input = { 
    knowledge_base_uuid: 'kbid', 
    data_source_uuid: 'dsid' 
  } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { delete: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.delete.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof deleteKnowledgeBaseDataSource).toBe('function');
    expect(typeof deleteKnowledgeBaseDataSource(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteKnowledgeBaseDataSource = deleteKnowledgeBaseDataSource(context);
    await _deleteKnowledgeBaseDataSource(default_input);
    expect(httpClient.delete).toHaveBeenCalledWith(
      `/gen-ai/knowledge_bases/${default_input.knowledge_base_uuid}/data_sources/${default_input.data_source_uuid}`
    );
  });

  it('should output axios response', async () => {
    const _deleteKnowledgeBaseDataSource = deleteKnowledgeBaseDataSource(context);
    const output = await _deleteKnowledgeBaseDataSource(default_input);
    expect(output).toBe(default_output);
  });
}); 