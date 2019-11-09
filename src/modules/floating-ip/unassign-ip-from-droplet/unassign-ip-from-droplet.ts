
import { IResponse, IContext } from '../../../types';
import { IAction } from '../../action';

export interface IUnassignIpFromDropletApiResponse {
  action: IAction;
}

export interface IUnassignIpFromDropletApiRequest {
  ip: string;
}

export type UnassignIpFromDropletResponse = IResponse<IUnassignIpFromDropletApiResponse>;

export const unassignIpFromDroplet = ({
  httpClient,
}: IContext) => ({
  ip,
}: IUnassignIpFromDropletApiRequest): Promise<Readonly<UnassignIpFromDropletResponse>> => {
  const path = '/floating_ips';
  const type = 'unassign';
  const body = {type};
  const url = `${path}/${ip}/actions`;

  return httpClient.post<IUnassignIpFromDropletApiResponse>(url, body);
};
