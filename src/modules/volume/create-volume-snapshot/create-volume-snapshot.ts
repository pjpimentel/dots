import { IResponse, IContext } from '../../../types';
import { ISnapshot } from '../../snapshot';

export interface ICreateVolumeSnapshotApiResponse {
  snapshot: ISnapshot;
}

export interface ICreateVolumeSnapshotApiRequest {
  id: string;
  name: string;
  tags?: string[];
}

export type CreateVolumeSnapshotRes = IResponse<ICreateVolumeSnapshotApiResponse>;

export const createVolumeSnapshot = ({
  httpClient,
}: IContext) => ({
  id,
  name,
  tags,
}: ICreateVolumeSnapshotApiRequest): Promise<Readonly<CreateVolumeSnapshotRes>> => {
  const path = '/volumes';
  const body = {name, tags};
  const url = `${path}/${id}/snapshots`;

  return httpClient.post<ICreateVolumeSnapshotApiResponse>(url, body);
};
