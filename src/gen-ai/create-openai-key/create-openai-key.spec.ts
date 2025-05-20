import { createOpenAIKey } from './create-openai-key';

describe('create-openai-key', () => {
  const default_input = { api_key: 'sk-123', name: 'my key' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { post: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.post.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof createOpenAIKey).toBe('function');
    expect(typeof createOpenAIKey(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createOpenAIKey = createOpenAIKey(context);
    await _createOpenAIKey(default_input);
    expect(httpClient.post).toHaveBeenCalledWith('/gen-ai/openai/keys', default_input);
  });

  it('should output axios response', async () => {
    const _createOpenAIKey = createOpenAIKey(context);
    const output = await _createOpenAIKey(default_input);
    expect(output).toBe(default_output);
  });
}); 