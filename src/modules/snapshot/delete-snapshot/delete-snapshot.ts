import { IResponse, IContext } from '../../../types';

export interface IDeleteSnapshotApiRequest {
  id?: string | number;
  snapshot_id: string | number;
}

export type DeleteSnapshotRes = IResponse<void>;

export const deleteSnapshot = ({
  httpClient,
}: IContext) => ({
  id,
  snapshot_id,
}: IDeleteSnapshotApiRequest): Promise<Readonly<DeleteSnapshotRes>> => {
  const path = '/snapshots';
  const url = `${path}/${snapshot_id || id}`;

  return httpClient.delete(url);
};
