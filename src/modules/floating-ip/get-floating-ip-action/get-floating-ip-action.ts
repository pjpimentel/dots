import { AxiosInstance } from 'axios';

export interface IGetFloatingIpActionApiRequest {
  action_id: string | number;
  ip: string;
}

export interface IGetFloatingIpActionApiResponse {
  action: IAction;
}

export type GetFloatingIpActionResponse = IResponse<IGetFloatingIpActionApiResponse>;

export const getFloatingIpAction = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  action_id,
  ip,
}: IGetFloatingIpActionApiRequest): Promise<Readonly<GetFloatingIpActionResponse>> => {
  const path = '/floating_ips';
  const url = `${path}/${ip}/actions/${action_id}`;

  return httpClient.get<IGetFloatingIpActionApiResponse>(url);
};
