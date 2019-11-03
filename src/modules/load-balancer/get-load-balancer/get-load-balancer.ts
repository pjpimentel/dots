import { IResponse, IContext } from '../../../types';
import { ILoadBalancer } from '..';

export interface IGetLoadBalancerApiResponse {
  load_balancer: ILoadBalancer;
}

export interface IGetLoadBalancerApiRequest {
  id: string;
}

export type GetLoadBalancerResponse = IResponse<IGetLoadBalancerApiResponse>;

export const getLoadBalancer = ({
  httpClient,
}: IContext) => ({
  id,
}: IGetLoadBalancerApiRequest): Promise<Readonly<GetLoadBalancerResponse>> => {
  const path = '/load_balancers';
  const url = `${path}/${id}`;

  return httpClient.get<IGetLoadBalancerApiResponse>(url);
};
