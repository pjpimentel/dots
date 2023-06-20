import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { ISnapshot } from '../../snapshot';

export interface IListDropletSnapshotsApiResponse extends IListResponse {
  snapshots: ISnapshot[];
}

export interface IListDropletSnapshotsApiRequest extends IListRequest {
  droplet_id: number;
}

export type ListDropletSnapshotsResponse = IResponse<IListDropletSnapshotsApiResponse>;

export const listDropletSnapshots = ({
  httpClient,
}: IContext) => ({
  droplet_id,
  page = 1,
  per_page = 25,
}: IListDropletSnapshotsApiRequest): Promise<Readonly<ListDropletSnapshotsResponse>> => {
  const url = `/droplets/${droplet_id}/snapshots`;
  const query_params = {page, per_page};

  return httpClient.get<IListDropletSnapshotsApiResponse>(url, {
    params: query_params,
  });
};
