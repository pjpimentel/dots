import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { IDomain } from '..';

export interface IListDomainsApiResponse extends IListResponse {
  domains: IDomain[];
}

export type ListDomainsResponse = IResponse<IListDomainsApiResponse>;

export const listDomains = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListDomainsResponse>> => {
  const url = '/domains';
  const query_params = {page, per_page};

  return httpClient.get<IListDomainsApiResponse>(url, {params: query_params});
};
