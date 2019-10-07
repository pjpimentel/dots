import { AxiosInstance } from 'axios';

export interface IGetDropletActionApiRequest {
  action_id: string | number;
  droplet_id: number;
}

export interface IGetDropletActionApiResponse {
  action: IAction;
}

export type GetDropletActionResponse = IResponse<IGetDropletActionApiResponse>;

export const getDropletAction = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  action_id,
  droplet_id,
}: IGetDropletActionApiRequest): Promise<Readonly<GetDropletActionResponse>> => {
  const path = `/droplets/${droplet_id}/actions/${action_id}`;
  const url = `${path}`;

  return httpClient.get<IGetDropletActionApiResponse>(url);
};
