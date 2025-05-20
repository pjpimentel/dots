import { addKnowledgeBaseDataSource } from './add-knowledge-base-data-source';

describe('add-knowledge-base-data-source', () => {
  const knowledge_base_uuid = 'uuid';
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { post: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.post.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof addKnowledgeBaseDataSource).toBe('function');
    expect(typeof addKnowledgeBaseDataSource(context)).toBe('function');
  });

  it('should handle Spaces data source correctly', async () => {
    const spaces_input = { 
      knowledge_base_uuid, 
      data: { 
        knowledge_base_uuid,
        spaces_data_source: {
          bucket_name: 'my-bucket',
          region: 'nyc1',
          item_path: '/docs'
        }
      } 
    } as any;
    
    const _addKnowledgeBaseDataSource = addKnowledgeBaseDataSource(context);
    await _addKnowledgeBaseDataSource(spaces_input);
    
    expect(httpClient.post).toHaveBeenCalledWith(
      `/gen-ai/knowledge_bases/${knowledge_base_uuid}/data_sources`,
      {
        knowledge_base_uuid,
        spaces_data_source: spaces_input.data.spaces_data_source
      }
    );
  });

  it('should handle Web Crawler data source correctly', async () => {
    const web_crawler_input = { 
      knowledge_base_uuid, 
      data: { 
        knowledge_base_uuid,
        web_crawler_data_source: {
          base_url: 'https://example.com',
          crawling_option: 'domain',
          embed_media: true
        }
      } 
    } as any;
    
    const _addKnowledgeBaseDataSource = addKnowledgeBaseDataSource(context);
    await _addKnowledgeBaseDataSource(web_crawler_input);
    
    expect(httpClient.post).toHaveBeenCalledWith(
      `/gen-ai/knowledge_bases/${knowledge_base_uuid}/data_sources`,
      {
        knowledge_base_uuid,
        web_crawler_data_source: web_crawler_input.data.web_crawler_data_source
      }
    );
  });

  it('should output axios response', async () => {
    const _addKnowledgeBaseDataSource = addKnowledgeBaseDataSource(context);
    const output = await _addKnowledgeBaseDataSource({
      knowledge_base_uuid,
      data: { knowledge_base_uuid }
    } as any);
    expect(output).toBe(default_output);
  });
}); 