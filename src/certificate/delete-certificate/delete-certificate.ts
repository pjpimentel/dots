import { IResponse, IContext } from '../../types';

export interface IDeleteCertificateApiRequest {
  certificate_id: string;
}

export type DeleteCertificateResponse = IResponse<void>;

export const deleteCertificate = ({
  httpClient,
}: IContext) => ({
  certificate_id,
}: IDeleteCertificateApiRequest): Promise<Readonly<DeleteCertificateResponse>> => {
  const path = '/certificates';
  const url = `${path}/${certificate_id}`;

  return httpClient.delete(url);
};
