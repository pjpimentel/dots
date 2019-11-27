import { IResponse, IContext, IListResponse, IListRequest } from '../../../types';
import { ISnapshot } from '../../snapshot';

export interface IListVolumeSnapshotsApiResponse extends IListResponse {
  snapshots: ISnapshot[];
}

export interface IListVolumeSnapshotsApiRequest extends IListRequest {
  id?: string;
  volume_id: string;
}

export type ListVolumeSnapshotsRes = IResponse<IListVolumeSnapshotsApiResponse>;

export const listVolumeSnapshots = ({
  httpClient,
}: IContext) => ({
  id,
  page = 1,
  per_page = 25,
  volume_id,
}: IListVolumeSnapshotsApiRequest): Promise<Readonly<ListVolumeSnapshotsRes>> => {
  const path = '/volumes';
  const queryParams = {page, per_page};
  const url = `${path}/${volume_id || id}/snapshots`;

  return httpClient.get<IListVolumeSnapshotsApiResponse>(url, {params: queryParams});
};
