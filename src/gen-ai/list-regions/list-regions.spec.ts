import { listRegions } from './list-regions';

describe('list-regions', () => {
  const default_output = require('crypto').randomBytes(2);
  const httpClient = {
    get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };
  const context = { httpClient } as any;

  beforeEach(() => {
    httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof listRegions).toBe('function');
    expect(typeof listRegions(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listRegions = listRegions(context);
    await _listRegions();
    expect(httpClient.get).toHaveBeenCalledWith(`/gen-ai/regions`);
  });

  it('should output axios response', async () => {
    const _listRegions = listRegions(context);
    const output = await _listRegions();
    expect(output).toBe(default_output);
  });
});
