import { IResponse, IContext } from '../../types';
import { ISnapshot } from '../../snapshot';

export interface ICreateVolumeSnapshotApiResponse {
  snapshot: ISnapshot;
}

export interface ICreateVolumeSnapshotApiRequest {
  name: string;
  tags?: string[];
  volume_id: string;
}

export type CreateVolumeSnapshotRes = IResponse<ICreateVolumeSnapshotApiResponse>;

export const createVolumeSnapshot = ({
  httpClient,
}: IContext) => ({
  name,
  tags,
  volume_id,
}: ICreateVolumeSnapshotApiRequest): Promise<Readonly<CreateVolumeSnapshotRes>> => {
  const url = `/volumes/${volume_id}/snapshots`;
  const body = {name, tags};

  return httpClient.post<ICreateVolumeSnapshotApiResponse>(url, body);
};
