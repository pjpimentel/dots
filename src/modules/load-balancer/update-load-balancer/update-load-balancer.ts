import { IResponse, IContext } from '../../../types';
import { ILoadBalancer } from '..';

export interface ICustomLoadBalancerPayload extends ILoadBalancer {
  load_balancer_id: string;
}
export interface IUpdateLoadBalancerApiResponse {
  load_balancer: ILoadBalancer;
}

export type UpdateLoadBalancerResponse = IResponse<IUpdateLoadBalancerApiResponse>;

export const updateLoadBalancer = ({
  httpClient,
}: IContext) => ({
  id,
  load_balancer_id,
  algorithm,
  droplet_ids,
  enable_proxy_protocol,
  forwarding_rules,
  health_check,
  name,
  redirect_http_to_https,
  region,
  sticky_sessions,
}: ICustomLoadBalancerPayload): Promise<Readonly<UpdateLoadBalancerResponse>> => {
  const path = '/load_balancers';
  const body = {
    algorithm,
    droplet_ids,
    enable_proxy_protocol,
    forwarding_rules,
    health_check,
    name,
    redirect_http_to_https,
    region,
    sticky_sessions,
  };
  const url = `${path}/${load_balancer_id || id}`;

  return httpClient.put<IUpdateLoadBalancerApiResponse>(url, body);
};
