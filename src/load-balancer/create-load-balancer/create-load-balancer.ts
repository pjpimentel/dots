import { IResponse, IContext } from '../../types';
import { ILoadBalancer, IForwardingRule, IHealthCheck, IStickSessions } from '..';

export interface ICreateLoadBalancerApiResponse {
  load_balancer: ILoadBalancer;
}

export interface ICreateLoadBalancerApiRequest {
  algorithm?: string;
  droplet_ids?: number[];
  enable_backend_keepalive?: boolean;
  enable_proxy_protocol?: boolean;
  forwarding_rules: IForwardingRule[];
  health_check?: IHealthCheck;
  name: string;
  redirect_http_to_https?: boolean;
  region: string;
  sticky_sessions?: IStickSessions;
  tag?: string;
  vpc_uuid?: string;
}

export type CreateLoadBalancerResponse = IResponse<ICreateLoadBalancerApiResponse>;

export const createLoadBalancer = ({
  httpClient,
}: IContext) => ({
  algorithm,
  droplet_ids,
  enable_backend_keepalive,
  enable_proxy_protocol,
  forwarding_rules,
  health_check,
  name,
  redirect_http_to_https,
  region,
  sticky_sessions,
  tag,
  vpc_uuid,
}: ICreateLoadBalancerApiRequest): Promise<Readonly<CreateLoadBalancerResponse>> => {
  const path = '/load_balancers';
  const body = {
    algorithm,
    droplet_ids,
    enable_backend_keepalive,
    enable_proxy_protocol,
    forwarding_rules,
    health_check,
    name,
    redirect_http_to_https,
    region,
    sticky_sessions,
    tag,
    vpc_uuid,
  };
  const url = `${path}`;

  return httpClient.post<ICreateLoadBalancerApiResponse>(url, body);
};
