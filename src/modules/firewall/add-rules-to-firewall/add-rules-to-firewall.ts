import { AxiosInstance } from 'axios';

export interface IAddRulesToFirewallApiRequest {
  firewall_id: string;
  inbound_rules: IFirewallInboundRule[];
  outbound_rules: IFirewallOutboundRule[];
}

export type AddRulesToFirewallResponse = IResponse<void>;

export const addRulesToFirewall = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  firewall_id,
  inbound_rules,
  outbound_rules,
}: IAddRulesToFirewallApiRequest): Promise<Readonly<AddRulesToFirewallResponse>> => {
  const path = '/firewalls';
  const body = {inbound_rules, outbound_rules};
  const url = `${path}/${firewall_id}/rules`;

  return httpClient.post<void>(url, body);
};
