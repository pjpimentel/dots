import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { IFloatingIP } from '..';

export interface IListFloatingIpsApiResponse extends IListResponse {
  floating_ips: IFloatingIP[];
}

export type ListFloatingIpssResponse = IResponse<IListFloatingIpsApiResponse>;

export const listFloatingIps = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListFloatingIpssResponse>> => {
  const url = '/floating_ips';
  const query_params = {page, per_page};

  return httpClient.get<IListFloatingIpsApiResponse>(url, {params: query_params});
};
