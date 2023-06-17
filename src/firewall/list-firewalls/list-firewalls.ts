import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { IFirewall } from '..';

export interface IListFirewallsApiResponse extends IListResponse {
  firewalls: IFirewall[];
}

export type ListFirewallsResponse = IResponse<IListFirewallsApiResponse>;

export const listFirewalls = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListFirewallsResponse>> => {
  const url = '/firewalls';
  const query_params = {page, per_page};

  return httpClient.get<IListFirewallsApiResponse>(url, {params: query_params});
};
