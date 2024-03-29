import { IResponse, IContext } from '../../types';
import { IFirewall } from '..';

export interface IUpdateFirewallApiResponse {
  firewall: IFirewall;
}

export type UpdateFirewallResponse = IResponse<IUpdateFirewallApiResponse>;

export const updateFirewall = ({
  httpClient,
}: IContext) => ({
  droplet_ids,
  id,
  inbound_rules,
  name,
  outbound_rules,
  tags,
}: IFirewall): Promise<Readonly<UpdateFirewallResponse>> => {
  const url = `/firewalls/${id}`;
  const body = {
    droplet_ids,
    inbound_rules,
    name,
    outbound_rules,
    tags,
  };

  return httpClient.put<IUpdateFirewallApiResponse>(url, body);
};
