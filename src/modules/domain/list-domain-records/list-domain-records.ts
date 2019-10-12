import { AxiosInstance } from 'axios';

export interface IListDomainRecordsApiResponse extends IListResponse {
  domain_records: IDomainRecord[];
}

export type ListDomainRecordsResponse = IResponse<IListDomainRecordsApiResponse>;

export interface IListDomainRecordsRequest extends IListRequest{
  domain_name: string;
}

export const listDomainRecords = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  domain_name,
  page = 1,
  per_page = 25,
}: IListDomainRecordsRequest): Promise<Readonly<ListDomainRecordsResponse>> => {
  const path = `/domains/${domain_name}/records`;
  const queryParams = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListDomainRecordsApiResponse>(url, {params: queryParams});
};
