import { deleteOpenAIKey } from './delete-openai-key';

describe('delete-openai-key', () => {
  const default_input = { key_uuid: 'kid' } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { delete: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.delete.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof deleteOpenAIKey).toBe('function');
    expect(typeof deleteOpenAIKey(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteOpenAIKey = deleteOpenAIKey(context);
    await _deleteOpenAIKey(default_input);
    expect(httpClient.delete).toHaveBeenCalledWith(`/gen-ai/openai/keys/${default_input.key_uuid}`);
  });

  it('should output axios response', async () => {
    const _deleteOpenAIKey = deleteOpenAIKey(context);
    const output = await _deleteOpenAIKey(default_input);
    expect(output).toBe(default_output);
  });
}); 