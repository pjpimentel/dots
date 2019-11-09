import { IResponse, IContext } from '../../../types';
import { ICertificate } from '..';

export interface IGetCertificateApiResponse {
  certificate: ICertificate;
}

export interface IGetCertificateApiRequest {
  certificate_id: string;
}

export type GetCertificateResponse = IResponse<IGetCertificateApiResponse>;

export const getCertificate = ({
  httpClient,
}: IContext) => ({
  certificate_id,
}: IGetCertificateApiRequest): Promise<Readonly<GetCertificateResponse>> => {
  const path = '/certificates';
  const url = `${path}/${certificate_id}`;

  return httpClient.get<IGetCertificateApiResponse>(url);
};
