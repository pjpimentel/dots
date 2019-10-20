import { AxiosInstance } from 'axios';

export interface IGetCertificateApiResponse {
  certificate: ICertificate;
}

export interface IGetCertificateApiRequest {
  id: string;
}

export type GetCertificateResponse = IResponse<IGetCertificateApiResponse>;

export const getCertificate = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IGetCertificateApiRequest): Promise<Readonly<GetCertificateResponse>> => {
  const path = '/certificates';
  const url = `${path}/${id}`;

  return httpClient.get<IGetCertificateApiResponse>(url);
};
