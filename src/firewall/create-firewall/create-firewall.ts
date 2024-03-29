import { IResponse, IContext } from '../../types';
import { IFirewall } from '..';

export interface ICreateFirewallApiResponse {
  firewall: IFirewall;
}

export type CreateFirewallResponse = IResponse<ICreateFirewallApiResponse>;

export const createFirewall = ({
  httpClient,
}: IContext) => ({
  droplet_ids,
  inbound_rules,
  name,
  outbound_rules,
  tags,
}: IFirewall): Promise<Readonly<CreateFirewallResponse>> => {
  const url = '/firewalls';
  const body = {
    droplet_ids,
    inbound_rules,
    name,
    outbound_rules,
    tags,
  };

  return httpClient.post<ICreateFirewallApiResponse>(url, body);
};
