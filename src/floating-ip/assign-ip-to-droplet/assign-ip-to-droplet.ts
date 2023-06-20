
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
  const url = `/floating_ips/${ip}/actions`;
  const type = 'assign';
  const body = {droplet_id, type};

  return httpClient.post<IAssignIpToDropletApiResponse>(url, body);
};
