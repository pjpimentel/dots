import { AxiosInstance } from 'axios';

export interface IGetSnapshotApiRequest {
  id: string;
}

export interface IGetSnapshotApiResponse {
  snapshot: ISnapshot;
}

type GetSnapshotResponse = IResponse<IGetSnapshotApiResponse>;

export const getSnapshot = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
}: IGetSnapshotApiRequest): Promise<Readonly<GetSnapshotResponse>> => {
  const path = `/snapshots/${id}`;
  const url = `${path}`;

  return httpClient.get<IGetSnapshotApiResponse>(url);
};
