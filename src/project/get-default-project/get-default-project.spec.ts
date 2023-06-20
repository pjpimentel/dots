import { getDefaultProject } from './get-default-project';

describe('get-default-project', () => {
  const default_output = require('crypto').randomBytes(2);

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
    expect(typeof getDefaultProject).toBe('function');
    expect(typeof getDefaultProject(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getDefaultProject = getDefaultProject(context);
    await _getDefaultProject();

    expect(httpClient.get).toHaveBeenCalledWith(`/projects/default`);
  });

  it('should output axios response', async () => {
    const _getDefaultProject = getDefaultProject(context);
    const output = await _getDefaultProject();

    expect(output).toBe(default_output);
  });
});
