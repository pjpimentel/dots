import { IResponse, IContext } from '../../types';
import {
  ILoadBalancer,
  IForwardingRule,
  IHealthCheck,
  IStickSessions,
} from '..';

export interface ICustomLoadBalancerPayload {
  algorithm?: string;
  droplet_ids?: number[];
  enable_proxy_protocol?: boolean;
  forwarding_rules: IForwardingRule[];
  health_check?: IHealthCheck;
  load_balancer_id: string;
  name: string;
  redirect_http_to_https?: boolean;
  region: string;
  sticky_sessions?: IStickSessions;
  tag?: string;
  vpc_uuid?: string;
}
export interface IUpdateLoadBalancerApiResponse {
  load_balancer: ILoadBalancer;
}

export type UpdateLoadBalancerResponse = IResponse<IUpdateLoadBalancerApiResponse>;

export const updateLoadBalancer = ({
  httpClient,
}: IContext) => ({
  algorithm,
  droplet_ids,
  enable_proxy_protocol,
  forwarding_rules,
  health_check,
  load_balancer_id,
  name,
  redirect_http_to_https,
  region,
  sticky_sessions,
  tag,
  vpc_uuid,
}: ICustomLoadBalancerPayload): Promise<Readonly<UpdateLoadBalancerResponse>> => {
  const url = `/load_balancers/${load_balancer_id}`;
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
    tag,
    vpc_uuid,
  };

  return httpClient.put<IUpdateLoadBalancerApiResponse>(url, body);
};
