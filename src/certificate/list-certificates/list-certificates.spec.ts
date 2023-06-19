import { listCertificates } from './list-certificates';

describe('list-certificates', () => {
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
    expect(typeof listCertificates).toBe('function');
    expect(typeof listCertificates(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _listCertificates = listCertificates(context);
    await _listCertificates({});

    expect(httpClient.get).toHaveBeenCalledWith(`/certificates`, {
      params: {
        page: 1,
        per_page: 25,
      },
    });
  });

  it('should use `page` and `per_page` input', async () => {
    const _listCertificates = listCertificates(context);
    const input = {
      page: require('crypto').randomBytes(2),
      per_page: require('crypto').randomBytes(2),
    } as any;
    await _listCertificates(input);

    expect(httpClient.get).toHaveBeenCalledWith(`/certificates`, {
      params: {
        page: input.page,
        per_page: input.per_page,
      },
    });
  });

  it('should output axios response', async () => {
    const _listCertificates = listCertificates(context);
    const output = await _listCertificates({});

    expect(output).toBe(default_output);
  });
});
