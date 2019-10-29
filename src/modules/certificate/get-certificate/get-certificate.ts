import { AxiosInstance } from 'axios';

export interface IGetCertificateApiResponse {
  certificate: ICertificate;
}

export interface IGetCertificateApiRequest {
  certificate_id: string;
}

export type GetCertificateResponse = IResponse<IGetCertificateApiResponse>;

export const getCertificate = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  certificate_id,
}: IGetCertificateApiRequest): Promise<Readonly<GetCertificateResponse>> => {
  const path = '/certificates';
  const url = `${path}/${certificate_id}`;

  return httpClient.get<IGetCertificateApiResponse>(url);
};
