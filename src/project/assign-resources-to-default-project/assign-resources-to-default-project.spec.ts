import { assignResourcesToDefaultProject } from './assign-resources-to-default-project';

describe('assign-resources-to-default-project', () => {
  const default_input = {
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
    expect(typeof assignResourcesToDefaultProject).toBe('function');
    expect(typeof assignResourcesToDefaultProject(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _assignResourcesToDefaultProject = assignResourcesToDefaultProject(context);
    await _assignResourcesToDefaultProject(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/projects/default/resources`, default_input);
  });

  it('should output axios response', async () => {
    const _assignResourcesToDefaultProject = assignResourcesToDefaultProject(context);
    const output = await _assignResourcesToDefaultProject(default_input);

    expect(output).toBe(default_output);
  });
});
