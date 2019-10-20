import { AxiosInstance } from 'axios';

export interface IRemoveRulesFromFirewallApiRequest {
  id: string;
  inbound_rules: IFirewallInboundRule[];
  outbound_rules: IFirewallOutboundRule[];
}

export type RemoveRulesFromFirewallResponse = IResponse<void>;

export const removeRulesFromFirewall = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
  inbound_rules,
  outbound_rules,
}: IRemoveRulesFromFirewallApiRequest): Promise<Readonly<RemoveRulesFromFirewallResponse>> => {
  const path = '/firewalls';
  const body = {inbound_rules, outbound_rules};
  const url = `${path}/${id}/rules`;

  return httpClient.delete(url, {data: body});
};
