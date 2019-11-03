import { IResponse, IContext } from '../../../types';
import { IFirewallInboundRule, IFirewallOutboundRule } from '..';

export interface IAddRulesToFirewallApiRequest {
  firewall_id: string;
  inbound_rules: IFirewallInboundRule[];
  outbound_rules: IFirewallOutboundRule[];
}

export type AddRulesToFirewallResponse = IResponse<void>;

export const addRulesToFirewall = ({
  httpClient,
}: IContext) => ({
  firewall_id,
  inbound_rules,
  outbound_rules,
}: IAddRulesToFirewallApiRequest): Promise<Readonly<AddRulesToFirewallResponse>> => {
  const path = '/firewalls';
  const body = {inbound_rules, outbound_rules};
  const url = `${path}/${firewall_id}/rules`;

  return httpClient.post<void>(url, body);
};
