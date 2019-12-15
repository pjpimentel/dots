export type FirewallRuleProtocol = 'tcp' | 'udp' | 'icmp';
export interface IFirewallRule {
  ports: string;
  protocol: FirewallRuleProtocol | string;
}
