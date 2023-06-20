import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';

export interface IEnableDropletPrivateNetworkingApiResponse {
  action: IAction;
}

export interface IEnableDropletPrivateNetworkingApiRequest {
  droplet_id: number;
}

export type EnableDropletPrivateNetworkingResponse = IResponse<IEnableDropletPrivateNetworkingApiResponse>;

export const enableDropletPrivateNetworking = ({
  httpClient,
}: IContext) => ({
  droplet_id,
}: IEnableDropletPrivateNetworkingApiRequest): Promise<Readonly<EnableDropletPrivateNetworkingResponse>> => {
  const url = `/droplets/${droplet_id}/actions`;
  const type = 'enable_private_networking';
  const body = {type};

  return httpClient.post<IEnableDropletPrivateNetworkingApiResponse>(url, body);
};
