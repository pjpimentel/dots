import { IResponse, IContext } from '../../../types';
import { ILoadBalancer } from '..';

export interface IGetLoadBalancerApiResponse {
  load_balancer: ILoadBalancer;
}

export interface IGetLoadBalancerApiRequest {
  load_balancer_id: string;
}

export type GetLoadBalancerResponse = IResponse<IGetLoadBalancerApiResponse>;

export const getLoadBalancer = ({
  httpClient,
}: IContext) => ({
  load_balancer_id,
}: IGetLoadBalancerApiRequest): Promise<Readonly<GetLoadBalancerResponse>> => {
  const path = '/load_balancers';
  const url = `${path}/${load_balancer_id}`;

  return httpClient.get<IGetLoadBalancerApiResponse>(url);
};
