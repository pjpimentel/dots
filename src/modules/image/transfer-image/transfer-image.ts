import { AxiosInstance } from 'axios';

export interface ITransferImageApiResponse {
  action: IAction;
}

export interface ITransferImageApiRequest {
  id: number;
  region: string;
}

export type TransferImageRes = IResponse<ITransferImageApiResponse>;

export const transferImage = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
  region,
}: ITransferImageApiRequest): Promise<Readonly<TransferImageRes>> => {
  const path = `/images/${id}/actions`;
  const url = `${path}`;
  const body = {type: 'transfer', region};

  return httpClient.post<ITransferImageApiResponse>(url, body);
};
