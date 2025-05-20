import { listKnowledgeBases } from './list-knowledge-bases';

describe('list-knowledge-bases', () => {
  const default_output = require('crypto').randomBytes(2);
  const httpClient = {
    get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };
  const context = { httpClient } as any;

  beforeEach(() => {
    httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof listKnowledgeBases).toBe('function');
    expect(typeof listKnowledgeBases(context)).toBe('function');
  });

  it('should call axios.get with empty object params', async () => {
    const _listKnowledgeBases = listKnowledgeBases(context);
    await _listKnowledgeBases({});
    expect(httpClient.get).toHaveBeenCalledWith(`/gen-ai/knowledge_bases`, { params: { page: 1, per_page: 25 } });
  });

  it('should call axios.get with custom params', async () => {
    const _listKnowledgeBases = listKnowledgeBases(context);
    await _listKnowledgeBases({ page: 2, per_page: 10 });
    expect(httpClient.get).toHaveBeenCalledWith(`/gen-ai/knowledge_bases`, { params: { page: 2, per_page: 10 } });
  });

  it('should call axios.get with no params (undefined)', async () => {
    const _listKnowledgeBases = listKnowledgeBases(context);
    await _listKnowledgeBases(undefined);
    expect(httpClient.get).toHaveBeenCalledWith(`/gen-ai/knowledge_bases`, { params: { page: 1, per_page: 25 } });
  });

  it('should output axios response', async () => {
    const _listKnowledgeBases = listKnowledgeBases(context);
    const output = await _listKnowledgeBases({});
    expect(output).toBe(default_output);
  });
}); 