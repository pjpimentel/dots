import { AxiosInstance } from 'axios';

export interface IListLoadBalancersApiResponse extends IListResponse {
  load_balancers: ILoadBalancer[];
}

export type ListLoadBalancersResponse = IResponse<IListLoadBalancersApiResponse>;

export const listLoadBalancers = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListLoadBalancersResponse>> => {
  const path = '/load_balancers';
  const queryParams = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListLoadBalancersApiResponse>(url, {params: queryParams});
};
