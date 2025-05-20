import { updateKnowledgeBase } from './update-knowledge-base';

describe('update-knowledge-base', () => {
  const default_input = { 
    knowledge_base_uuid: 'kbid',
    updates: { name: 'New Name' }
  } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { put: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.put.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof updateKnowledgeBase).toBe('function');
    expect(typeof updateKnowledgeBase(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateKnowledgeBase = updateKnowledgeBase(context);
    await _updateKnowledgeBase(default_input);
    expect(httpClient.put).toHaveBeenCalledWith(
      `/gen-ai/knowledge_bases/${default_input.knowledge_base_uuid}`,
      default_input.updates
    );
  });

  it('should output axios response', async () => {
    const _updateKnowledgeBase = updateKnowledgeBase(context);
    const output = await _updateKnowledgeBase(default_input);
    expect(output).toBe(default_output);
  });
}); 