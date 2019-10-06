import { AxiosInstance } from 'axios';

export interface IListSnapshotApiResponse extends IListResponse {
  snapshots: ISnapshot[];
}

export interface IListSnapshotApiRequest extends IListRequest {
  resource_type?: 'droplet' | 'volume';
}

type ListSnapshotsResponse = IResponse<IListSnapshotApiResponse>;

export const listSnapshots = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  page = 1,
  per_page = 25,
  resource_type = undefined,
}: IListSnapshotApiRequest): Promise<Readonly<ListSnapshotsResponse>> => {
  const path = '/snapshots';
  const queryParams = {page, per_page};
  const hasResourceTypeFilter = typeof resource_type === 'string';

  if (hasResourceTypeFilter) {
    Object.assign(queryParams, {resource_type});
  }

  const url = `${path}`;

  return httpClient.get<IListSnapshotApiResponse>(url, {params: queryParams});
};