import { IForwardingRule, IHealthCheck, IStickSessions, LoadBalancerStatus } from '.';

export interface ILoadBalancer {
  algorithm: string;
  created_at: string;
  droplet_ids: number[];
  enable_backend_keepalive: boolean;
  enable_proxy_protocol: boolean;
  forwarding_rules: IForwardingRule[];
  health_check: IHealthCheck;
  id: string;
  ip: string;
  name: string;
  redirect_http_to_https: boolean;
  region: string;
  status: LoadBalancerStatus | string;
  sticky_sessions: IStickSessions;
  tag: string;
  vpc_uuid: string;
}
