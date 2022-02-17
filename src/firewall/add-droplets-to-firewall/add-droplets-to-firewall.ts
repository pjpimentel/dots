import { IResponse, IContext } from '../../types';

export interface IAddDropletsToFirewallApiRequest {
  droplet_ids: number[]
  firewall_id: string;
}

export type AddDropletsToFirewallResponse = IResponse<void>;

export const addDropletsToFirewall = ({
  httpClient,
}: IContext) => ({
  droplet_ids,
  firewall_id,
}: IAddDropletsToFirewallApiRequest): Promise<Readonly<AddDropletsToFirewallResponse>> => {
  const path = '/firewalls';
  const body = {
    droplet_ids,
  };
  const url = `${path}/${firewall_id}/droplets`;

  return httpClient.post<void>(url, body);
};
