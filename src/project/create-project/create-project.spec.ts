import { createProject } from './create-project';

describe('create-project', () => {
  const default_input = {
    name: require('crypto').randomBytes(2),
    description: require('crypto').randomBytes(2),
    purpose: require('crypto').randomBytes(2),
    environment: require('crypto').randomBytes(2),
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
    expect(typeof createProject).toBe('function');
    expect(typeof createProject(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createProject = createProject(context);
    await _createProject(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/projects`, default_input);
  });

  it('should output axios response', async () => {
    const _createProject = createProject(context);
    const output = await _createProject(default_input);

    expect(output).toBe(default_output);
  });
});
