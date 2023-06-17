
import { IResponse, IContext } from '../../types';
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
  const url = `/floating_ips/${ip}/actions`;
  const type = 'unassign';
  const body = {type};

  return httpClient.post<IUnassignIpFromDropletApiResponse>(url, body);
};
