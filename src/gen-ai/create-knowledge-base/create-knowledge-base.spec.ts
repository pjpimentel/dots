import { createKnowledgeBase } from './create-knowledge-base';

describe('create-knowledge-base', () => {
  const default_input = { 
    name: 'My KB',
    embedding_model_uuid: 'model1',
    project_id: 'project1',
    region: 'nyc1',
    datasources: []
  } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { post: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.post.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof createKnowledgeBase).toBe('function');
    expect(typeof createKnowledgeBase(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createKnowledgeBase = createKnowledgeBase(context);
    await _createKnowledgeBase(default_input);
    expect(httpClient.post).toHaveBeenCalledWith('/gen-ai/knowledge_bases', default_input);
  });

  it('should output axios response', async () => {
    const _createKnowledgeBase = createKnowledgeBase(context);
    const output = await _createKnowledgeBase(default_input);
    expect(output).toBe(default_output);
  });
}); 