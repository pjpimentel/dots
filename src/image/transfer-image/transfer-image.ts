import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';

export interface ITransferImageApiResponse {
  action: IAction;
}

export interface ITransferImageApiRequest {
  image_id: number;
  region: string;
}

export type TransferImageRes = IResponse<ITransferImageApiResponse>;

export const transferImage = ({
  httpClient,
}: IContext) => ({
  image_id,
  region,
}: ITransferImageApiRequest): Promise<Readonly<TransferImageRes>> => {
  const url = `/images/${image_id}/actions`;
  const body = {type: 'transfer', region};

  return httpClient.post<ITransferImageApiResponse>(url, body);
};
