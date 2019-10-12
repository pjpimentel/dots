import { AxiosInstance } from 'axios';

export interface ICreateLoadBalancerApiResponse {
  load_balancer: ILoadBalancer;
}

export type CreateLoadBalancerResponse = IResponse<ICreateLoadBalancerApiResponse>;

export const createLoadBalancer = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
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
