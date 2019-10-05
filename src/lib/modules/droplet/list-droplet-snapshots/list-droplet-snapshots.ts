import { AxiosInstance } from 'axios';

export interface IListDropletSnapshotsApiResponse extends IListResponse {
  snapshots: ISnapshot[];
}

export interface IListDropletSnapshotsApiRequest extends IListRequest {
  id: number;
}

type ListDropletSnapshotsResponse = IResponse<IListDropletSnapshotsApiResponse>;

export const listDropletSnapshots = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
  page = 1,
  per_page = 25,
}: IListDropletSnapshotsApiRequest): Promise<Readonly<ListDropletSnapshotsResponse>> => {
  const path = `/droplets/${id}/snapshots`;
  const queryParams = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListDropletSnapshotsApiResponse>(url, {
    params: queryParams,
  });
};
