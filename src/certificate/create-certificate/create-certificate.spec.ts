import { createCertificate } from './create-certificate';

describe('create-certificate', () => {
  const default_input = {
    certificate_chain: Math.random(),
    dns_names: Math.random(),
    leaf_certificate: Math.random(),
    name: Math.random(),
    private_key: Math.random(),
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
    expect(typeof createCertificate).toBe('function');
    expect(typeof createCertificate(context)).toBe('function');
  });

  it('should call axios.post', async () => {
    const _createCertificate = createCertificate(context);
    await _createCertificate(default_input);

    expect(httpClient.post).toHaveBeenCalledWith(`/certificates`, default_input);
  });

  it('should output axios response', async () => {
    const _createCertificate = createCertificate(context);
    const output = await _createCertificate(default_input);

    expect(output).toBe(default_output);
  });
});
