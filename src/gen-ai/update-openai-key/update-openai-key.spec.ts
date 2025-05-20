import { updateOpenAIKey } from './update-openai-key';

describe('update-openai-key', () => {
  const default_input = { 
    key_uuid: 'kid',
    updates: { name: 'New Name', enabled: true }
  } as any;
  const default_output = require('crypto').randomBytes(2);
  const httpClient = { put: jest.fn().mockReturnValue(Promise.resolve(default_output)) };
  const context = { httpClient } as any;

  beforeEach(() => { httpClient.put.mockClear(); });

  it('should be and return a fn', () => {
    expect(typeof updateOpenAIKey).toBe('function');
    expect(typeof updateOpenAIKey(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateOpenAIKey = updateOpenAIKey(context);
    await _updateOpenAIKey(default_input);
    expect(httpClient.put).toHaveBeenCalledWith(
      `/gen-ai/openai/keys/${default_input.key_uuid}`,
      default_input.updates
    );
  });

  it('should output axios response', async () => {
    const _updateOpenAIKey = updateOpenAIKey(context);
    const output = await _updateOpenAIKey(default_input);
    expect(output).toBe(default_output);
  });
}); 