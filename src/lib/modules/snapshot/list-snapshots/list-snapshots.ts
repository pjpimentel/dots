import { AxiosInstance } from 'axios';

export interface IListSnapshotApiResponse extends IListResponse {
  snapshots: ISnapshot[];
}

export type ISnapshotType = 'distribution' | 'application' | undefined;

export interface IListSnapshotApiRequest extends IListRequest {}

type ListSnapshotsResponse = IResponse<IListSnapshotApiResponse>;

export const listSnapshots = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  page = 1,
  perPage = 25,
}: IListRequest): Promise<Readonly<ListSnapshotsResponse>> => {
  const path = '/snapshots';
  const queryParams = {page, per_page: perPage};
  const url = `${path}`;

  return httpClient.get<IListSnapshotApiResponse>(url, {params: queryParams});
};
