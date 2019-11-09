import { IResponse, IContext, IListResponse, IListRequest } from '../../../types';
import { ISnapshot } from '..';

export interface IListSnapshotApiResponse extends IListResponse {
  snapshots: ISnapshot[];
}

export interface IListSnapshotApiRequest extends IListRequest {
  resource_type?: 'droplet' | 'volume';
}

export type ListSnapshotsResponse = IResponse<IListSnapshotApiResponse>;

export const listSnapshots = ({
  httpClient,
}: IContext) => ({
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
