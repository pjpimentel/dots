import { IResponse, IContext, IListResponse, IListRequest } from '../../../types';
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
  const path = '/domains';
  const queryParams = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListDomainsApiResponse>(url, {params: queryParams});
};
