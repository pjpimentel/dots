import { IResponse, IContext } from '../../types';
import { ICertificate } from '..';

export interface ICreateCertificateApiResponse {
  certificate: ICertificate;
}

export interface ICreateCertificateApiRequest {
  certificate_chain?: string;
  dns_names?: string[];
  leaf_certificate?: string;
  name: string;
  private_key?: string;
  type: string | 'custom' | 'lets_encrypt';
}

export type CreateCertificateResponse = IResponse<ICreateCertificateApiResponse>;

export const createCertificate = ({
  httpClient,
}: IContext) => ({
  certificate_chain,
  dns_names,
  leaf_certificate,
  name,
  private_key,
  type,
}: ICreateCertificateApiRequest): Promise<Readonly<CreateCertificateResponse>> => {
  const path = '/certificates';
  const body = {
    certificate_chain,
    dns_names,
    leaf_certificate,
    name,
    private_key,
    type,
  };
  const url = `${path}`;

  return httpClient.post<ICreateCertificateApiResponse>(url, body);
};
