import { IResponse, IContext } from '../../../types';

export interface IDeleteVpcApiRequest {
  vpc_id: string;
}

export type DeleteVpcResponse = IResponse<void>;

export const deleteVpc = ({
  httpClient,
}: IContext) => ({
  vpc_id,
}: IDeleteVpcApiRequest): Promise<Readonly<DeleteVpcResponse>> => {
  const path = '/vpcs';
  const url = `${path}/${vpc_id}`;

  return httpClient.delete(url);
};
