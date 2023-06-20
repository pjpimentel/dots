import { deleteProject } from './delete-project';

describe('delete-project', () => {
  const default_input = {
    project_id: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    delete: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.delete.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof deleteProject).toBe('function');
    expect(typeof deleteProject(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteProject = deleteProject(context);
    await _deleteProject(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/projects/${default_input.project_id}`);
  });

  it('should output axios response', async () => {
    const _deleteProject = deleteProject(context);
    const output = await _deleteProject(default_input);

    expect(output).toBe(default_output);
  });
});
