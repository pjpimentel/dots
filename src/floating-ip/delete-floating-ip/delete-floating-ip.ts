import { IResponse, IContext } from '../../types';

export interface IDeleteFloatingIpApiRequest {
  ip: string;
}

export type DeleteFloatingIpResponse = IResponse<void>;

export const deleteFloatingIp = ({
  httpClient,
}: IContext) => ({
  ip,
}: IDeleteFloatingIpApiRequest): Promise<Readonly<DeleteFloatingIpResponse>> => {
  const url = `/floating_ips/${ip}`;

  return httpClient.delete(url);
};
