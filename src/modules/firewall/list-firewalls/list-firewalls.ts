import { AxiosInstance } from 'axios';

export interface IListFirewallsApiResponse extends IListResponse {
  firewalls: IFirewall[];
}

export type ListFirewallsResponse = IResponse<IListFirewallsApiResponse>;

export const listFirewalls = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListFirewallsResponse>> => {
  const path = '/firewalls';
  const queryParams = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListFirewallsApiResponse>(url, {params: queryParams});
};
