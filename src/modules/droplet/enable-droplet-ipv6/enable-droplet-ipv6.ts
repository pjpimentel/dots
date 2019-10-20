import { AxiosInstance } from 'axios';

export interface IEnableDropletIpv6ApiResponse {
  action: IAction;
}

export interface IEnableDropletIpv6ApiRequest {
  id: string;
}

export type EnableDropletIpv6Response = IResponse<IEnableDropletIpv6ApiResponse>;

export const enableDropletIpv6 = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IEnableDropletIpv6ApiRequest): Promise<Readonly<EnableDropletIpv6Response>> => {
  const path = '/droplets';
  const type = 'enable_ipv6';
  const body = {type};
  const url = `${path}/${id}/actions`;

  return httpClient.post<IEnableDropletIpv6ApiResponse>(url, body);
};
