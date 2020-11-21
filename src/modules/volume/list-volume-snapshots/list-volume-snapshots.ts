import { IResponse, IContext, IListResponse, IListRequest } from '../../../types';
import { ISnapshot } from '../../snapshot';

export interface IListVolumeSnapshotsApiResponse extends IListResponse {
  snapshots: ISnapshot[];
}

export interface IListVolumeSnapshotsApiRequest extends IListRequest {
  volume_id: string;
}

export type ListVolumeSnapshotsRes = IResponse<IListVolumeSnapshotsApiResponse>;

export const listVolumeSnapshots = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
  volume_id,
}: IListVolumeSnapshotsApiRequest): Promise<Readonly<ListVolumeSnapshotsRes>> => {
  const path = '/volumes';
  const query_params = {page, per_page};
  const url = `${path}/${volume_id}/snapshots`;

  return httpClient.get<IListVolumeSnapshotsApiResponse>(url, {params: query_params});
};
