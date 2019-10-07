import { AxiosInstance } from 'axios';

export interface ICreateVolumeApiResponse {
  volume: IVolume;
}

export interface ICreateVolumeApiRequest {
  description?: string;
  filesystem_label?: string;
  filesystem_type?: 'ext4' | 'xfs' | string;
  name: string;
  region: string;
  size_gigabytes: number;
  snapshot_id?: string;
  tags?: string[];
}

export type CreateVolumeResponse = IResponse<ICreateVolumeApiResponse>;

export const createVolume = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  description,
  filesystem_label,
  filesystem_type,
  name,
  region,
  size_gigabytes,
  snapshot_id,
  tags,
}: ICreateVolumeApiRequest): Promise<Readonly<CreateVolumeResponse>> => {
  const path = '/volumes';
  const body = {
    description,
    filesystem_label,
    filesystem_type,
    name,
    region,
    size_gigabytes,
    snapshot_id,
    tags,
  };
  const url = `${path}`;

  return httpClient.post<ICreateVolumeApiResponse>(url, body);
};
