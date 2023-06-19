import { patchDefaultProject } from './patch-default-project';

describe('patch-default-project', () => {
  const default_input = {
    description: require('crypto').randomBytes(2),
    environment: require('crypto').randomBytes(2),
    is_default: require('crypto').randomBytes(2),
    name: require('crypto').randomBytes(2),
    purpose: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    patch: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.patch.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof patchDefaultProject).toBe('function');
    expect(typeof patchDefaultProject(context)).toBe('function');
  });

  it('should call axios.patch', async () => {
    const _patchDefaultProject = patchDefaultProject(context);
    await _patchDefaultProject(default_input);

    expect(httpClient.patch).toHaveBeenCalledWith(`/projects/default`, default_input);
  });

  it('should output axios response', async () => {
    const _patchDefaultProject = patchDefaultProject(context);
    const output = await _patchDefaultProject(default_input);

    expect(output).toBe(default_output);
  });
});
