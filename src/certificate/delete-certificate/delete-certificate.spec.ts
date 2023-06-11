import { deleteCertificate } from './delete-certificate';

describe('delete-certificate', () => {
  const default_input = {
    certificate_id: `${Math.random()}`,
  } as any;
  const default_output = Math.random();

  const httpClient = {
    delete: jest.fn().mockReturnValue(Promise.resolve(default_output)),
  };

  const context = {
    httpClient,
  } as any;

  beforeEach(() => {
    httpClient.delete.mockClear();
  });

  it('should be and return a fn', () => {
    expect(typeof deleteCertificate).toBe('function');
    expect(typeof deleteCertificate(context)).toBe('function');
  });

  it('should call axios.delete', async () => {
    const _deleteCertificate = deleteCertificate(context);
    await _deleteCertificate(default_input);

    expect(httpClient.delete).toHaveBeenCalledWith(`/certificates/${default_input.certificate_id}`);
  });

  it('should output axios response', async () => {
    const _deleteCertificate = deleteCertificate(context);
    const output = await _deleteCertificate(default_input);

    expect(output).toBe(default_output);
  });
});
