import { runAppDetection } from './run-app-detection';

describe('run-app-detection', () => {
  const default_input = {
    commit_sha: `${Math.random()}`,
    component_type: `${Math.random()}`,
    git: `${Math.random()}`,
    github: `${Math.random()}`,
  } as any;
  const default_output = Math.random();

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
    expect(typeof runAppDetection).toBe('function');
    expect(typeof runAppDetection(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _runAppDetection = runAppDetection(context);
    await _runAppDetection(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/apps/detect`, default_input);
  });

  it('should output axios response', async () => {
    const _runAppDetection = runAppDetection(context);
    const output = await _runAppDetection({});

    expect(output).toBe(default_output);
  });
});
