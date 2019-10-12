import { AxiosInstance } from 'axios';

export interface ICreateVolumeSnapshotApiResponse {
  snapshot: ISnapshot;
}

export interface ICreateVolumeSnapshotApiRequest {
  id: string;
  name: string;
  tags?: string[];
}

export type CreateVolumeSnapshotRes = IResponse<ICreateVolumeSnapshotApiResponse>;

export const createVolumeSnapshot = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
  name,
  tags,
}: ICreateVolumeSnapshotApiRequest): Promise<Readonly<CreateVolumeSnapshotRes>> => {
  const path = '/volumes';
  const body = {name, tags};
  const url = `${path}/${id}/snapshots`;

  return httpClient.post<ICreateVolumeSnapshotApiResponse>(url, body);
};
