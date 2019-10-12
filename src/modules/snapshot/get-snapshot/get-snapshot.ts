import { AxiosInstance } from 'axios';

export interface IGetSnapshotApiRequest {
  id: string;
}

export interface IGetSnapshotApiResponse {
  snapshot: ISnapshot;
}

export type GetSnapshotResponse = IResponse<IGetSnapshotApiResponse>;

export const getSnapshot = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IGetSnapshotApiRequest): Promise<Readonly<GetSnapshotResponse>> => {
  const path = '/snapshots';
  const url = `${path}/${id}`;

  return httpClient.get<IGetSnapshotApiResponse>(url);
};
