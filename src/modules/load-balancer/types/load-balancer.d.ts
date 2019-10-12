interface ILoadBalancer {
  algorithm?: string;
  droplet_ids?: number[];
  enable_proxy_protocol?: boolean;
  forwarding_rules: IForwardingRule[];
  health_check?: IHealthCheck;
  name: string;
  redirect_http_to_https?: boolean;
  region: string;
  sticky_sessions?: IStickSessions;
}