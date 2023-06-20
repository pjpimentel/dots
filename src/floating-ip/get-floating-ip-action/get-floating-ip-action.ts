import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';

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
}: IContext) => ({
  action_id,
  ip,
}: IGetFloatingIpActionApiRequest): Promise<Readonly<GetFloatingIpActionResponse>> => {
  const url = `/floating_ips/${ip}/actions/${action_id}`;

  return httpClient.get<IGetFloatingIpActionApiResponse>(url);
};
