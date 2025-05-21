import { listOpenAIKeys } from './list-openai-keys';

describe('list-openai-keys', () => {
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { get: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.get.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof listOpenAIKeys).toBe('function');
    expect(typeof listOpenAIKeys(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listOpenAIKeys = listOpenAIKeys(context);
    await _listOpenAIKeys({ page: 5, per_page: 10 });
    expect(httpClient.get).toHaveBeenCalledWith(
      '/gen-ai/openai/keys',
      { params: { page: 5, per_page: 10 } },
    );
  });

  it('should output axios response', async () => {
    const _listOpenAIKeys = listOpenAIKeys(context);
    const output = await _listOpenAIKeys();
    expect(output).toBe(default_output);
  });
}); 