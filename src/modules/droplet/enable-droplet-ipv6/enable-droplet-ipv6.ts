import { IResponse, IContext } from '../../../types';
import { IAction } from '../../action';

export interface IEnableDropletIpv6ApiResponse {
  action: IAction;
}

export interface IEnableDropletIpv6ApiRequest {
  droplet_id: number;
}

export type EnableDropletIpv6Response = IResponse<IEnableDropletIpv6ApiResponse>;

export const enableDropletIpv6 = ({
  httpClient,
}: IContext) => ({
  droplet_id,
}: IEnableDropletIpv6ApiRequest): Promise<Readonly<EnableDropletIpv6Response>> => {
  const path = '/droplets';
  const type = 'enable_ipv6';
  const body = {type};
  const url = `${path}/${droplet_id}/actions`;

  return httpClient.post<IEnableDropletIpv6ApiResponse>(url, body);
};
