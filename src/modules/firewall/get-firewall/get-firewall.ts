import { AxiosInstance } from 'axios';

export interface IGetFirewallApiResponse {
  firewall: IFirewall;
}

export interface IGetFirewallApiRequest {
  firewall_id: string;
}

export type GetFirewallResponse = IResponse<IGetFirewallApiResponse>;

export const getFirewall = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  firewall_id,
}: IGetFirewallApiRequest): Promise<Readonly<GetFirewallResponse>> => {
  const path = '/firewalls';
  const url = `${path}/${firewall_id}`;

  return httpClient.get<IGetFirewallApiResponse>(url);
};
