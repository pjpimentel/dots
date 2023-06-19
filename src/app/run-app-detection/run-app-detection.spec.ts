import { runAppDetection } from './run-app-detection';

describe('run-app-detection', () => {
  const default_input = {
    commit_sha: `${require('crypto').randomBytes(2)}`,
    component_type: `${require('crypto').randomBytes(2)}`,
    git: `${require('crypto').randomBytes(2)}`,
    github: `${require('crypto').randomBytes(2)}`,
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
