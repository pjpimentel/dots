import { AxiosInstance } from 'axios';

export interface IDeleteSnapshotApiRequest {
  id: number;
}

type DeleteSnapshotRes = IResponse<void>;

export const deleteSnapshot = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
}: IDeleteSnapshotApiRequest): Promise<Readonly<DeleteSnapshotRes>> => {
  const path = `/snapshots/${id}`;
  const url = `${path}`;

  return httpClient.delete(url);
};
