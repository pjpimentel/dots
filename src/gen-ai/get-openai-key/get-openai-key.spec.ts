import { getOpenAIKey } from './get-openai-key';

describe('get-openai-key', () => {
  const default_input = { key_uuid: 'kid' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { get: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.get.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof getOpenAIKey).toBe('function');
    expect(typeof getOpenAIKey(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getOpenAIKey = getOpenAIKey(context);
    await _getOpenAIKey(default_input);
    expect(httpClient.get).toHaveBeenCalledWith(`/gen-ai/openai/keys/${default_input.key_uuid}`);
  });

  it('should output axios response', async () => {
    const _getOpenAIKey = getOpenAIKey(context);
    const output = await _getOpenAIKey(default_input);
    expect(output).toBe(default_output);
  });
}); 