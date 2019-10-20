import { AxiosInstance } from 'axios';

export interface IRemoveDropletsFromFirewallApiRequest {
  droplet_ids: number[]
  id: string;
}

export type RemoveDropletsFromFirewallResponse = IResponse<void>;

export const removeDropletsFromFirewall = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  droplet_ids,
  id,
}: IRemoveDropletsFromFirewallApiRequest): Promise<Readonly<RemoveDropletsFromFirewallResponse>> => {
  const path = '/firewalls';
  const body = {
    droplet_ids,
  };
  const url = `${path}/${id}/droplets`;

  return httpClient.delete(url, {data: body});
};
