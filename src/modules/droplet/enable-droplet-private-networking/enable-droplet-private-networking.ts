import { AxiosInstance } from 'axios';

export interface IEnableDropletPrivateNetworkingApiResponse {
  action: IAction;
}

export interface IEnableDropletPrivateNetworkingApiRequest {
  id: string;
}

export type EnableDropletPrivateNetworkingResponse = IResponse<IEnableDropletPrivateNetworkingApiResponse>;

export const enableDropletPrivateNetworking = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IEnableDropletPrivateNetworkingApiRequest): Promise<Readonly<EnableDropletPrivateNetworkingResponse>> => {
  const path = '/droplets';
  const type = 'enable_private_networking';
  const body = {type};
  const url = `${path}/${id}/actions`;

  return httpClient.post<IEnableDropletPrivateNetworkingApiResponse>(url, body);
};
