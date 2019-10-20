interface IFirewall {
  droplet_ids?: number[];
  inbound_rules: IFirewallInboundRule[];
  name: string;
  outbound_rules: IFirewallOutboundRule[];
  tags?: string[];
}