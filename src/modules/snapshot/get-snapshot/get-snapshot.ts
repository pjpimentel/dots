import { IResponse, IContext } from '../../../types';
import { ISnapshot } from '..';

export interface IGetSnapshotApiRequest {
  snapshot_id: string | number;
}

export interface IGetSnapshotApiResponse {
  snapshot: ISnapshot;
}

export type GetSnapshotResponse = IResponse<IGetSnapshotApiResponse>;

export const getSnapshot = ({
  httpClient,
}: IContext) => ({
  snapshot_id,
}: IGetSnapshotApiRequest): Promise<Readonly<GetSnapshotResponse>> => {
  const path = '/snapshots';
  const url = `${path}/${snapshot_id}`;

  return httpClient.get<IGetSnapshotApiResponse>(url);
};
