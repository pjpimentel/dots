import { IResponse, IContext } from '../../../types';
import { IVpc } from '..';

export interface IUpdateVpcApiResponse {
  vpc: IVpc;
}

export interface IUpdateVpcApiRequest {
  description?: string;
  name: string;
  vpc_id: string;
}

export type UpdateVpcResponse = IResponse<IUpdateVpcApiResponse>;

export const updateVpc = ({
  httpClient,
}: IContext) => ({
  description,
  name,
  vpc_id,
}: IUpdateVpcApiRequest): Promise<Readonly<UpdateVpcResponse>> => {
    const path = '/vpcs';
    const body = {
      description,
      name,
    };
    const url = `${path}/${vpc_id}`;

    return httpClient.put<IUpdateVpcApiResponse>(url, body);
  };
