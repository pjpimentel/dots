import { AxiosInstance } from 'axios';

export interface IConvertImageToSnapshotApiResponse {
  action: IAction;
}

export interface IConvertImageToSnapshotApiRequest {
  id: number;
}

export type ConvertImageToSnapshotRes = IResponse<IConvertImageToSnapshotApiResponse>;

export const convertImageToSnapshot = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
}: IConvertImageToSnapshotApiRequest): Promise<Readonly<ConvertImageToSnapshotRes>> => {
  const path = `/images/${id}/actions`;
  const url = `${path}`;
  const body = {type: 'convert'};

  return httpClient.post<IConvertImageToSnapshotApiResponse>(url, body);
};
