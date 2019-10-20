import { AxiosInstance } from 'axios';

export interface IDeleteCertificateApiRequest {
  id: string;
}

export type DeleteCertificateResponse = IResponse<void>;

export const deleteCertificate = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IDeleteCertificateApiRequest): Promise<Readonly<DeleteCertificateResponse>> => {
  const path = '/certificates';
  const url = `${path}/${id}`;

  return httpClient.delete(url);
};
