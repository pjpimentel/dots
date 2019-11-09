import { IResponse, IContext } from '../../../types';

export interface IDeleteSnapshotApiRequest {
  id: number;
}

export type DeleteSnapshotRes = IResponse<void>;

export const deleteSnapshot = ({
  httpClient,
}: IContext) => ({
  id,
}: IDeleteSnapshotApiRequest): Promise<Readonly<DeleteSnapshotRes>> => {
  const path = '/snapshots';
  const url = `${path}/${id}`;

  return httpClient.delete(url);
};
