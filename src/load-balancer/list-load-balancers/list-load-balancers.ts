import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { ILoadBalancer } from '..';

export interface IListLoadBalancersApiResponse extends IListResponse {
  load_balancers: ILoadBalancer[];
}

export type ListLoadBalancersResponse = IResponse<IListLoadBalancersApiResponse>;

export const listLoadBalancers = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListLoadBalancersResponse>> => {
  const url = '/load_balancers';
  const query_params = {page, per_page};

  return httpClient.get<IListLoadBalancersApiResponse>(url, {params: query_params});
};
