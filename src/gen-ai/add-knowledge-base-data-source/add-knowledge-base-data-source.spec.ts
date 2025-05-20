import { addKnowledgeBaseDataSource } from './add-knowledge-base-data-source';

describe('add-knowledge-base-data-source', () => {
  const default_input = { 
    knowledge_base_uuid: 'uuid', 
    data: { knowledge_base_uuid: 'uuid' } 
  } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { post: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.post.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof addKnowledgeBaseDataSource).toBe('function');
    expect(typeof addKnowledgeBaseDataSource(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _addKnowledgeBaseDataSource = addKnowledgeBaseDataSource(context);
    await _addKnowledgeBaseDataSource(default_input);
    expect(httpClient.post).toHaveBeenCalledWith(
      `/gen-ai/knowledge_bases/${default_input.knowledge_base_uuid}/data_sources`,
      default_input.data
    );
  });

  it('should output axios response', async () => {
    const _addKnowledgeBaseDataSource = addKnowledgeBaseDataSource(context);
    const output = await _addKnowledgeBaseDataSource(default_input);
    expect(output).toBe(default_output);
  });
}); 