import { AxiosInstance } from 'axios';

export interface IListCertificatesApiResponse extends IListResponse {
  certificates: ICertificate[];
}

export type ListCertificatesResponse = IResponse<IListCertificatesApiResponse>;

export const listCertificates = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListCertificatesResponse>> => {
  const path = '/certificates';
  const queryParams = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListCertificatesApiResponse>(url, {params: queryParams});
};
