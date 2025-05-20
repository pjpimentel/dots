import { getKnowledgeBase } from './get-knowledge-base';

describe('get-knowledge-base', () => {
  const default_input = { knowledge_base_uuid: '123' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = {
    get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };
  const context = { httpClient } as any;

  beforeEach(() => {
    httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof getKnowledgeBase).toBe('function');
    expect(typeof getKnowledgeBase(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getKnowledgeBase = getKnowledgeBase(context);
    await _getKnowledgeBase(default_input);
    expect(httpClient.get).toHaveBeenCalledWith(`/gen-ai/knowledge_bases/${default_input.knowledge_base_uuid}`);
  });

  it('should output axios response', async () => {
    const _getKnowledgeBase = getKnowledgeBase(context);
    const output = await _getKnowledgeBase(default_input);
    expect(output).toBe(default_output);
  });
}); 