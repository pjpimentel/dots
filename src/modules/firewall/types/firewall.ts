import { IFirewallInboundRule, IFirewallOutboundRule } from '.';

export interface IFirewall {
  droplet_ids?: number[];
  id?: string;
  inbound_rules: IFirewallInboundRule[];
  name: string;
  outbound_rules: IFirewallOutboundRule[];
  tags?: string[];
}
