import { AxiosInstance } from 'axios';

export interface IUpdateFirewallApiResponse {
  firewall: IFirewall;
}

export type UpdateFirewallResponse = IResponse<IUpdateFirewallApiResponse>;

export const updateFirewall = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  droplet_ids,
  id,
  inbound_rules,
  name,
  outbound_rules,
  tags,
}: IFirewall): Promise<Readonly<UpdateFirewallResponse>> => {
  const path = '/firewalls';
  const body = {
    droplet_ids,
    inbound_rules,
    name,
    outbound_rules,
    tags,
  };
  const url = `${path}/${id}`;

  return httpClient.put<IUpdateFirewallApiResponse>(url, body);
};
