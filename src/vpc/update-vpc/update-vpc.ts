import { IResponse, IContext } from '../../types';
import { IVpc } from '..';

export interface IUpdateVpcApiResponse {
  vpc: IVpc;
}

export interface IUpdateVpcApiRequest {
  description?: string;
  is_default?: boolean;
  name?: string;
  vpc_id: string;
}

export type UpdateVpcResponse = IResponse<IUpdateVpcApiResponse>;

export const updateVpc = ({
  httpClient,
}: IContext) => ({
  description,
  is_default,
  name,
  vpc_id,
}: IUpdateVpcApiRequest): Promise<Readonly<UpdateVpcResponse>> => {
    const path = '/vpcs';
    const body = {
      default: is_default,
      description,
      name,
    };
    const url = `${path}/${vpc_id}`;

    return httpClient.patch<IUpdateVpcApiResponse>(url, body);
  };
