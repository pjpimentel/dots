import { AxiosInstance } from 'axios';

export interface IListDropletSnapshotsApiResponse extends IListResponse {
  snapshots: ISnapshot[];
}

export interface IListDropletSnapshotsApiRequest extends IListRequest {
  id: number;
}

export type ListDropletSnapshotsResponse = IResponse<IListDropletSnapshotsApiResponse>;

export const listDropletSnapshots = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
  page = 1,
  per_page = 25,
}: IListDropletSnapshotsApiRequest): Promise<Readonly<ListDropletSnapshotsResponse>> => {
  const path = '/droplets';
  const queryParams = {page, per_page};
  const url = `${path}/${id}/snapshots`;

  return httpClient.get<IListDropletSnapshotsApiResponse>(url, {
    params: queryParams,
  });
};
