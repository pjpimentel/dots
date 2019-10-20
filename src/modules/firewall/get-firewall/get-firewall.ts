import { AxiosInstance } from 'axios';

export interface IGetFirewallApiResponse {
  firewall: IFirewall;
}

export interface IGetFirewallApiRequest {
  id: string;
}

export type GetFirewallResponse = IResponse<IGetFirewallApiResponse>;

export const getFirewall = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IGetFirewallApiRequest): Promise<Readonly<GetFirewallResponse>> => {
  const path = '/firewalls';
  const url = `${path}/${id}`;

  return httpClient.get<IGetFirewallApiResponse>(url);
};
