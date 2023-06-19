import { assignResourcesToProject } from './assign-resources-to-project';

describe('assign-resources-to-project', () => {
  const default_input = {
    project_id: require('crypto').randomBytes(2),
    resources: require('crypto').randomBytes(2),
  } as any;
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    post: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.post.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof assignResourcesToProject).toBe('function');
    expect(typeof assignResourcesToProject(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _assignResourcesToProject = assignResourcesToProject(context);
    await _assignResourcesToProject(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/projects/${default_input.project_id}/resources`, {
      ...default_input,
      project_id: undefined
    });
  });

  it('should output axios response', async () => {
    const _assignResourcesToProject = assignResourcesToProject(context);
    const output = await _assignResourcesToProject(default_input);

    expect(output).toBe(default_output);
  });
});
