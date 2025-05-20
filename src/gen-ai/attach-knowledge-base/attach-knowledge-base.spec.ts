import { attachKnowledgeBase } from './attach-knowledge-base';

describe('attach-knowledge-base', () => {
  const default_input = { agent_uuid: 'aid', knowledge_base_uuid: 'kbid' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { post: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.post.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof attachKnowledgeBase).toBe('function');
    expect(typeof attachKnowledgeBase(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _attachKnowledgeBase = attachKnowledgeBase(context);
    await _attachKnowledgeBase(default_input);
    expect(httpClient.post).toHaveBeenCalledWith(
      `/gen-ai/agents/${default_input.agent_uuid}/knowledge_bases/${default_input.knowledge_base_uuid}`
    );
  });

  it('should output axios response', async () => {
    const _attachKnowledgeBase = attachKnowledgeBase(context);
    const output = await _attachKnowledgeBase(default_input);
    expect(output).toBe(default_output);
  });
}); 