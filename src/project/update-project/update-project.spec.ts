import { updateProject } from './update-project';

describe('update-project', () => {
  const default_input = {
    project_id: require('crypto').randomBytes(2),
    description: require('crypto').randomBytes(2),
    environment: require('crypto').randomBytes(2),
    is_default: require('crypto').randomBytes(2),
    name: require('crypto').randomBytes(2),
    purpose: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

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
    expect(typeof updateProject).toBe('function');
    expect(typeof updateProject(context)).toBe('function');
  });

  it('should call axios.put', async () => {
    const _updateProject = updateProject(context);
    await _updateProject(default_input);

    expect(httpClient.put).toHaveBeenCalledWith(`/projects/${default_input.project_id}`, {
      ...default_input,
      project_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _updateProject = updateProject(context);
    const output = await _updateProject(default_input);

    expect(output).toBe(default_output);
  });
});
