
import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';

export interface IAssignIpToDropletApiResponse {
  action: IAction;
}

export interface IAssignIpToDropletApiRequest {
  droplet_id: number;
  ip: string;
}

export type AssignIpToDropletResponse = IResponse<IAssignIpToDropletApiResponse>;

export const assignIpToDroplet = ({
  httpClient,
}: IContext) => ({
  droplet_id,
  ip,
}: IAssignIpToDropletApiRequest): Promise<Readonly<AssignIpToDropletResponse>> => {
  const path = '/floating_ips';
  const type = 'assign';
  const body = {droplet_id, type};
  const url = `${path}/${ip}/actions`;

  return httpClient.post<IAssignIpToDropletApiResponse>(url, body);
};
