import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';

export interface IConvertImageToSnapshotApiResponse {
  action: IAction;
}

export interface IConvertImageToSnapshotApiRequest {
  image_id: number;
}

export type ConvertImageToSnapshotRes = IResponse<IConvertImageToSnapshotApiResponse>;

export const convertImageToSnapshot = ({
  httpClient,
}: IContext) => ({
  image_id,
}: IConvertImageToSnapshotApiRequest): Promise<Readonly<ConvertImageToSnapshotRes>> => {
  const url = `/images/${image_id}/actions`;
  const body = {type: 'convert'};

  return httpClient.post<IConvertImageToSnapshotApiResponse>(url, body);
};
