import { AxiosInstance } from 'axios';

export interface IListFloatingIpActionsApiResponse extends IListResponse {
  actions: IAction[];
}

export interface IListFloatingIpActionsApiRequest extends IListRequest {
  ip: string;
}

export type ListFloatingIpActionssResponse = IResponse<IListFloatingIpActionsApiResponse>;

export const listFloatingIpActions = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  ip,
  page = 1,
  per_page = 25,
}: IListFloatingIpActionsApiRequest): Promise<Readonly<ListFloatingIpActionssResponse>> => {
  const path = '/floating_ips';
  const queryParams = {page, per_page};
  const url = `${path}/${ip}/actions`;

  return httpClient.get<IListFloatingIpActionsApiResponse>(url, {params: queryParams});
};
