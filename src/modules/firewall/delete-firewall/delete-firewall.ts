import { AxiosInstance } from 'axios';

export interface IDeleteFirewallApiRequest {
  firewall_id: string;
}

export type DeleteFirewallResponse = IResponse<void>;

export const deleteFirewall = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  firewall_id,
}: IDeleteFirewallApiRequest): Promise<Readonly<DeleteFirewallResponse>> => {
  const path = '/firewalls';
  const url = `${path}/${firewall_id}`;

  return httpClient.delete(url);
};
