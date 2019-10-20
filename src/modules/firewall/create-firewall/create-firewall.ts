import { AxiosInstance } from 'axios';

export interface ICreateFirewallApiResponse {
  firewall: IFirewall;
}

export type CreateFirewallResponse = IResponse<ICreateFirewallApiResponse>;

export const createFirewall = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  droplet_ids,
  inbound_rules,
  name,
  outbound_rules,
  tags,
}: IFirewall): Promise<Readonly<CreateFirewallResponse>> => {
  const path = '/firewalls';
  const body = {
    droplet_ids,
    inbound_rules,
    name,
    outbound_rules,
    tags,
  };
  const url = `${path}`;

  return httpClient.post<ICreateFirewallApiResponse>(url, body);
};
