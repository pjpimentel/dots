import { IResponse, IContext } from '../../../types';
import { ISnapshot } from '..';

export interface IGetSnapshotApiRequest {
  id?: string | number;
  snapshot_id: string | number;
}

export interface IGetSnapshotApiResponse {
  snapshot: ISnapshot;
}

export type GetSnapshotResponse = IResponse<IGetSnapshotApiResponse>;

export const getSnapshot = ({
  httpClient,
}: IContext) => ({
  id,
  snapshot_id,
}: IGetSnapshotApiRequest): Promise<Readonly<GetSnapshotResponse>> => {
  const path = '/snapshots';
  const url = `${path}/${snapshot_id || id}`;

  return httpClient.get<IGetSnapshotApiResponse>(url);
};
