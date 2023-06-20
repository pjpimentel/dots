import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { IDomainRecord } from '..';

export interface IListDomainRecordsApiResponse extends IListResponse {
  domain_records: IDomainRecord[];
}

export type ListDomainRecordsResponse = IResponse<IListDomainRecordsApiResponse>;

export interface IListDomainRecordsRequest extends IListRequest{
  domain_name: string;
  name?: string;
  type?: string;
}

export const listDomainRecords = ({
  httpClient,
}: IContext) => ({
  domain_name,
  name,
  page = 1,
  per_page = 25,
  type,
}: IListDomainRecordsRequest): Promise<Readonly<ListDomainRecordsResponse>> => {
  const url = `/domains/${domain_name}/records`;
  const query_params = {
    name,
    page,
    per_page,
    type,
  };

  return httpClient.get<IListDomainRecordsApiResponse>(url, {params: query_params});
};
