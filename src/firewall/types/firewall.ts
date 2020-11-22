import {
  IFirewallInboundRule,
  IFirewallOutboundRule,
  IFirewallPendingChange,
} from '.';

export interface IFirewall {
  droplet_ids?: number[];
  id?: string;
  inbound_rules: IFirewallInboundRule[];
  name: string;
  outbound_rules: IFirewallOutboundRule[];
  pending_changes?: IFirewallPendingChange[];
  status?: string;
  tags?: string[];
}
