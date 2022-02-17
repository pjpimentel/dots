import { IResponse, IContext } from '../../types';
import { IFirewallInboundRule, IFirewallOutboundRule } from '..';

export interface IRemoveRulesFromFirewallApiRequest {
  firewall_id: string;
  inbound_rules: IFirewallInboundRule[];
  outbound_rules: IFirewallOutboundRule[];
}

export type RemoveRulesFromFirewallResponse = IResponse<void>;

export const removeRulesFromFirewall = ({
  httpClient,
}: IContext) => ({
  firewall_id,
  inbound_rules,
  outbound_rules,
}: IRemoveRulesFromFirewallApiRequest): Promise<Readonly<RemoveRulesFromFirewallResponse>> => {
  const path = '/firewalls';
  const body = {inbound_rules, outbound_rules};
  const url = `${path}/${firewall_id}/rules`;

  return httpClient.delete(url, {data: body});
};
