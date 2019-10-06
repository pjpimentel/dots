import { AxiosInstance } from 'axios';

export interface IEnableDropletPrivateNetworkingApiResponse extends IListResponse {
  action: IAction;
}

export interface IEnableDropletPrivateNetworkingApiRequest {
  id: string;
}

type EnableDropletPrivateNetworkingResponse = IResponse<IEnableDropletPrivateNetworkingApiResponse>;

export const enableDropletPrivateNetworking = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
}: IEnableDropletPrivateNetworkingApiRequest): Promise<Readonly<EnableDropletPrivateNetworkingResponse>> => {
  const path = `/droplets/${id}/actions`;
  const type = 'enable_private_networking';
  const body = {type};
  const url = `${path}`;

  return httpClient.post<IEnableDropletPrivateNetworkingApiResponse>(url, body);
};
