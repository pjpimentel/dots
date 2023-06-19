import { listImages } from './list-images';

describe('list-images', () => {
  const default_output = require('crypto').randomBytes(2);

  const httpClient = {
    get: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.get.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof listImages).toBe('function');
    expect(typeof listImages(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listImages = listImages(context);
    await _listImages({});

    expect(httpClient.get).toHaveBeenCalledWith(`/images`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page`, `per_page`, `tag_name`, `type` and `user_images` input', async () => {
    const _listImages = listImages(context);
    const input = {
      page: require('crypto').randomBytes(2),
      per_page: require('crypto').randomBytes(2),
      tag_name: require('crypto').randomBytes(2),
      type: require('crypto').randomBytes(2),
      user_images: require('crypto').randomBytes(2),
    } as any;
    await _listImages(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/images`, {
      params: {
        page: input.page,
        per_page: input.per_page,
        private: input.user_images,
        tag_name: input.tag_name,
        type: input.type,
      },
    });
  });

  it('should output axios response', async () => {
    const _listImages = listImages(context);
    const output = await _listImages({});

    expect(output).toBe(default_output);
  });
});
