import { AxiosInstance } from 'axios';

export interface IDeleteFirewallApiRequest {
  id: string;
}

export type DeleteFirewallResponse = IResponse<void>;

export const deleteFirewall = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IDeleteFirewallApiRequest): Promise<Readonly<DeleteFirewallResponse>> => {
  const path = '/firewalls';
  const url = `${path}/${id}`;

  return httpClient.delete(url);
};
