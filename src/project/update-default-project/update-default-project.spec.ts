import { updateDefaultProject } from './update-default-project';

describe('update-default-project', () => {
  const default_input = {
    description: Math.random(),
    environment: Math.random(),
    is_default: Math.random(),
    name: Math.random(),
    purpose: Math.random(),
  } as any;
  const default_output = Math.random();

  const httpClient = {
    put: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.put.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof updateDefaultProject).toBe('function');
    expect(typeof updateDefaultProject(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateDefaultProject = updateDefaultProject(context);
    await _updateDefaultProject(default_input);

    expect(httpClient.put).toHaveBeenCalledWith(`/projects/default`, default_input);
  });

  it('should output axios response', async () => {
    const _updateDefaultProject = updateDefaultProject(context);
    const output = await _updateDefaultProject(default_input);

    expect(output).toBe(default_output);
  });
});
