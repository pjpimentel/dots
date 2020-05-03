import { IResponse, IContext } from '../../../types';
import { IVpc } from '../';

export interface ICreateVpcApiResponse {
  vpc: IVpc;
}

export interface ICreateVpcApiRequest {
  description?: string;
  ip_range?: string;
  name: string;
  region: string;
}

export type CreateVpcResponse = IResponse<ICreateVpcApiResponse>;

export const createVpc = ({
  httpClient,
}: IContext) => ({
  description,
  ip_range,
  name,
  region,
}: ICreateVpcApiRequest): Promise<Readonly<CreateVpcResponse>> => {
  const path = '/vpcs';
  const body = {
    description,
    ip_range,
    name,
    region,
  };
  const url = `${path}`;

  return httpClient.post<ICreateVpcApiResponse>(url, body);
};
