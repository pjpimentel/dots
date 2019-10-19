import { AxiosInstance } from 'axios';

export interface IListFloatingIpsApiResponse extends IListResponse {
  floating_ips: IFloatingIP[];
}

export type ListFloatingIpssResponse = IResponse<IListFloatingIpsApiResponse>;

export const listFloatingIps = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListFloatingIpssResponse>> => {
  const path = '/floating_ips';
  const queryParams = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListFloatingIpsApiResponse>(url, {params: queryParams});
};
