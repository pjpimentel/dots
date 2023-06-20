import { getCertificate } from './get-certificate';

describe('get-certificate', () => {
  const default_input = {
    certificate_id: `${require('crypto').randomBytes(2)}`
  } as any;
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
    expect(typeof getCertificate).toBe('function');
    expect(typeof getCertificate(context)).toBe('function');
  });

  it('should call axios.get', async () => {
    const _getCertificate = getCertificate(context);
    await _getCertificate(default_input);

    expect(httpClient.get).toHaveBeenCalledWith(`/certificates/${default_input.certificate_id}`);
  });

  it('should output axios response', async () => {
    const _getCertificate = getCertificate(context);
    const output = await _getCertificate(default_input);

    expect(output).toBe(default_output);
  });
});
