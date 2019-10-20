import { AxiosInstance } from 'axios';

export interface IDeleteFloatingIpApiRequest {
  ip: string;
}

export type DeleteFloatingIpResponse = IResponse<void>;

export const deleteFloatingIp = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  ip,
}: IDeleteFloatingIpApiRequest): Promise<Readonly<DeleteFloatingIpResponse>> => {
  const path = '/floating_ips';
  const url = `${path}/${ip}`;

  return httpClient.delete(url);
};
