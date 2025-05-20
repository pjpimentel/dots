import { listModels } from './list-models';

describe('list-models', () => {
  const default_output = require('crypto').randomBytes(2);
  const httpClient = {
    get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };
  const context = { httpClient } as any;

  beforeEach(() => {
    httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof listModels).toBe('function');
    expect(typeof listModels(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listModels = listModels(context);
    await _listModels({});
    expect(httpClient.get).toHaveBeenCalledWith(`/gen-ai/models`, { params: { page: 1, per_page: 25 } });
  });

  it('should work with no input', async () => {
    const _listModels = listModels(context);
    await _listModels();
    expect(httpClient.get).toHaveBeenCalledWith(`/gen-ai/models`, { params: { page: 1, per_page: 25 } });
  });

  it('should use input params', async () => {
    const _listModels = listModels(context);
    const input = { page: 2, per_page: 10, use_case: 'embedding' } as any;
    await _listModels(input);
    expect(httpClient.get).toHaveBeenCalledWith(`/gen-ai/models`, { params: { page: input.page, per_page: input.per_page, usecases: input.use_case } });
  });

  it('should output axios response', async () => {
    const _listModels = listModels(context);
    const output = await _listModels({});
    expect(output).toBe(default_output);
  });
});
