import { IResponse, IContext } from '../../types';
import { IFirewall } from '..';

export interface IGetFirewallApiResponse {
  firewall: IFirewall;
}

export interface IGetFirewallApiRequest {
  firewall_id: string;
}

export type GetFirewallResponse = IResponse<IGetFirewallApiResponse>;

export const getFirewall = ({
  httpClient,
}: IContext) => ({
  firewall_id,
}: IGetFirewallApiRequest): Promise<Readonly<GetFirewallResponse>> => {
  const url = `/firewalls/${firewall_id}`;

  return httpClient.get<IGetFirewallApiResponse>(url);
};
