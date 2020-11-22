import { IFirewallRule, IFirewallRuleNode } from '.';

export interface IFirewallOutboundRule extends IFirewallRule {
  destinations: IFirewallRuleNode;
}
