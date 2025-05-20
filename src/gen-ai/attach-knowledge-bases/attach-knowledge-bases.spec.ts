import { attachKnowledgeBases } from './attach-knowledge-bases';

describe('attach-knowledge-bases', () => {
  const default_input = { 
    agent_uuid: 'aid', 
    knowledge_base_uuids: ['kb1', 'kb2'] 
  } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { post: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.post.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof attachKnowledgeBases).toBe('function');
    expect(typeof attachKnowledgeBases(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _attachKnowledgeBases = attachKnowledgeBases(context);
    await _attachKnowledgeBases(default_input);
    expect(httpClient.post).toHaveBeenCalledWith(
      `/gen-ai/agents/${default_input.agent_uuid}/knowledge_bases`,
      { knowledge_base_uuids: default_input.knowledge_base_uuids }
    );
  });

  it('should output axios response', async () => {
    const _attachKnowledgeBases = attachKnowledgeBases(context);
    const output = await _attachKnowledgeBases(default_input);
    expect(output).toBe(default_output);
  });
}); 