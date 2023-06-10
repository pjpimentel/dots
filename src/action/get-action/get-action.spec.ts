import { getAction } from './get-action';

describe('get-action', () => {
  const default_input = {
    action_id: Math.random()
  };
  const default_output = Math.random();

  const httpClient = {
    get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof getAction).toBe('function');
    expect(typeof getAction(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getAction = getAction(context);
    await _getAction(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/actions/${default_input.action_id}`);
  });

  it('should output axios response', async () => {
    const _getAction = getAction(context);
    const output = await _getAction(default_input);

    expect(output).toBe(default_output);
  });
});
