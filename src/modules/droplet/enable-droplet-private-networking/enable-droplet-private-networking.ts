import { AxiosInstance } from 'axios';

export interface IEnableDropletPrivateNetworkingApiResponse {
  action: IAction;
}

export interface IEnableDropletPrivateNetworkingApiRequest {
  droplet_id: number;
}

export type EnableDropletPrivateNetworkingResponse = IResponse<IEnableDropletPrivateNetworkingApiResponse>;

export const enableDropletPrivateNetworking = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  droplet_id,
}: IEnableDropletPrivateNetworkingApiRequest): Promise<Readonly<EnableDropletPrivateNetworkingResponse>> => {
  const path = '/droplets';
  const type = 'enable_private_networking';
  const body = {type};
  const url = `${path}/${droplet_id}/actions`;

  return httpClient.post<IEnableDropletPrivateNetworkingApiResponse>(url, body);
};
