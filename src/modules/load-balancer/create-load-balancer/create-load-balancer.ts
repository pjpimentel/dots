import { IResponse, IContext } from '../../../types';
import { ILoadBalancer } from '..';

export interface ICreateLoadBalancerApiResponse {
  load_balancer: ILoadBalancer;
}

export type CreateLoadBalancerResponse = IResponse<ICreateLoadBalancerApiResponse>;

export const createLoadBalancer = ({
  httpClient,
}: IContext) => ({
  algorithm,
  droplet_ids,
  enable_proxy_protocol,
  forwarding_rules,
  health_check,
  name,
  redirect_http_to_https,
  region,
  sticky_sessions,
}: ILoadBalancer): Promise<Readonly<CreateLoadBalancerResponse>> => {
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
  const url = `${path}`;

  return httpClient.post<ICreateLoadBalancerApiResponse>(url, body);
};
