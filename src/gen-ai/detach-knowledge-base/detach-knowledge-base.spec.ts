import { detachKnowledgeBase } from './detach-knowledge-base';

describe('detach-knowledge-base', () => {
  const default_input = { agent_uuid: 'aid', knowledge_base_uuid: 'kbid' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { delete: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.delete.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof detachKnowledgeBase).toBe('function');
    expect(typeof detachKnowledgeBase(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _detachKnowledgeBase = detachKnowledgeBase(context);
    await _detachKnowledgeBase(default_input);
    expect(httpClient.delete).toHaveBeenCalledWith(
      `/gen-ai/agents/${default_input.agent_uuid}/knowledge_bases/${default_input.knowledge_base_uuid}`
    );
  });

  it('should output axios response', async () => {
    const _detachKnowledgeBase = detachKnowledgeBase(context);
    const output = await _detachKnowledgeBase(default_input);
    expect(output).toBe(default_output);
  });
}); 