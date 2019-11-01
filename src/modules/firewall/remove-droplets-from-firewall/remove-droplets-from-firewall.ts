import { AxiosInstance } from 'axios';

export interface IRemoveDropletsFromFirewallApiRequest {
  droplet_ids: number[]
  firewall_id: string;
}

export type RemoveDropletsFromFirewallResponse = IResponse<void>;

export const removeDropletsFromFirewall = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  droplet_ids,
  firewall_id,
}: IRemoveDropletsFromFirewallApiRequest): Promise<Readonly<RemoveDropletsFromFirewallResponse>> => {
  const path = '/firewalls';
  const body = {
    droplet_ids,
  };
  const url = `${path}/${firewall_id}/droplets`;

  return httpClient.delete(url, {data: body});
};
