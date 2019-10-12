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
}: IContext<AxiosInstance>) => ({
  id,
}: IConvertImageToSnapshotApiRequest): Promise<Readonly<ConvertImageToSnapshotRes>> => {
  const path = '/images';
  const url = `${path}/${id}/actions`;
  const body = {type: 'convert'};

  return httpClient.post<IConvertImageToSnapshotApiResponse>(url, body);
};
