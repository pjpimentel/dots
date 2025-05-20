import { deleteKnowledgeBase } from './delete-knowledge-base';

describe('delete-knowledge-base', () => {
  const default_input = { knowledge_base_uuid: 'kbid' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { delete: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.delete.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof deleteKnowledgeBase).toBe('function');
    expect(typeof deleteKnowledgeBase(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteKnowledgeBase = deleteKnowledgeBase(context);
    await _deleteKnowledgeBase(default_input);
    expect(httpClient.delete).toHaveBeenCalledWith(
      `/gen-ai/knowledge_bases/${default_input.knowledge_base_uuid}`
    );
  });

  it('should output axios response', async () => {
    const _deleteKnowledgeBase = deleteKnowledgeBase(context);
    const output = await _deleteKnowledgeBase(default_input);
    expect(output).toBe(default_output);
  });
}); 