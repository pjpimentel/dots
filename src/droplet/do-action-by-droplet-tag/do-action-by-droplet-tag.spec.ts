import { doActionByDropletTag } from './do-action-by-droplet-tag';

describe('do-action-by-droplet-tag', () => {
  const default_input = {
    tag_name: Math.random(),
    type: Math.random(),
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
    expect(typeof doActionByDropletTag).toBe('function');
    expect(typeof doActionByDropletTag(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _enableDropletBackups = doActionByDropletTag(context);
    await _enableDropletBackups(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/droplets/actions`,
      {
        type: default_input.type,
      }, {
        params: { tag_name: default_input.tag_name }
      }
    );
  });

  it('should output axios response', async () => {
    const _enableDropletBackups = doActionByDropletTag(context);
    const output = await _enableDropletBackups(default_input);

    expect(output).toBe(default_output);
  });
});
