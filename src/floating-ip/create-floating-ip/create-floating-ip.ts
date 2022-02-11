import { IResponse, IContext } from '../../types';
import { IFloatingIP } from '..';

export interface ICreateFloatingIpApiResponse {
  floating_ip: IFloatingIP;
}

export interface ICreateFloatingIpByDropletApiRequest {
  droplet_id: number;
}

export interface ICreateFloatingIpByRegionApiRequest {
  region: string;
}

export type CreateFloatingIpApiRequest =
  ICreateFloatingIpByDropletApiRequest
  | ICreateFloatingIpByRegionApiRequest;

export type CreateFloatingIpResponse = IResponse<ICreateFloatingIpApiResponse>;

export const createFloatingIp = ({
  httpClient,
}: IContext) => (body: CreateFloatingIpApiRequest): Promise<Readonly<CreateFloatingIpResponse>> => {
  const path = '/floating_ips';
  const url = `${path}`;

  return httpClient.post<ICreateFloatingIpApiResponse>(url, body);
};
