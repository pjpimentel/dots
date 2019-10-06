import { AxiosInstance } from 'axios';

export interface ICreateVolumeSnapshotApiResponse {
  snapshot: ISnapshot;
}

export interface ICreateVolumeSnapshotApiRequest {
  id: string;
  name: string;
  tags?: string[];
}

type CreateVolumeSnapshotRes = IResponse<ICreateVolumeSnapshotApiResponse>;

export const createVolumeSnapshot = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
  name,
  tags,
}: ICreateVolumeSnapshotApiRequest): Promise<Readonly<CreateVolumeSnapshotRes>> => {
  const path = `/volumes/${id}/snapshots`;
  const body = {name, tags};
  const url = `${path}`;

  return httpClient.post<ICreateVolumeSnapshotApiResponse>(url, body);
};
