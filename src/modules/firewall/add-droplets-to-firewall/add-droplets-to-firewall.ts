import { AxiosInstance } from 'axios';

export interface IAddDropletsToFirewallApiRequest {
  droplet_ids: number[]
  id: string;
}

export type AddDropletsToFirewallResponse = IResponse<void>;

export const addDropletsToFirewall = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  droplet_ids,
  id,
}: IAddDropletsToFirewallApiRequest): Promise<Readonly<AddDropletsToFirewallResponse>> => {
  const path = '/firewalls';
  const body = {
    droplet_ids,
  };
  const url = `${path}/${id}/droplets`;

  return httpClient.post<void>(url, body);
};
