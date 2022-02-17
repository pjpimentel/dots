import { IResponse, IContext } from '../../types';
import { IFloatingIP } from '..';

export interface IGetFloatingIpApiResponse {
  floating_ip: IFloatingIP;
}

export interface IGetFloatingIpApiRequest {
  ip: string;
}

export type GetFloatingIpResponse = IResponse<IGetFloatingIpApiResponse>;

export const getFloatingIp = ({
  httpClient,
}: IContext) => ({
  ip,
}: IGetFloatingIpApiRequest): Promise<Readonly<GetFloatingIpResponse>> => {
  const path = '/floating_ips';
  const url = `${path}/${ip}`;

  return httpClient.get<IGetFloatingIpApiResponse>(url);
};
