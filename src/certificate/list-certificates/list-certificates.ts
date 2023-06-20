import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { ICertificate } from '..';

export interface IListCertificatesApiResponse extends IListResponse {
  certificates: ICertificate[];
}

export type ListCertificatesResponse = IResponse<IListCertificatesApiResponse>;

export const listCertificates = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListCertificatesResponse>> => {
  const url = '/certificates';
  const query_params = {page, per_page};

  return httpClient.get<IListCertificatesApiResponse>(url, {params: query_params});
};
