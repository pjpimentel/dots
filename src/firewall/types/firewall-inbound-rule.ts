import { IFirewallRule, IFirewallRuleNode } from '.';

export interface IFirewallInboundRule extends IFirewallRule {
  sources: IFirewallRuleNode;
}
