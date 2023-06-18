import { IResponse, IContext } from '../../types';
import { IVolume } from '..';

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
}: IContext) => ({
  description,
  filesystem_label,
  filesystem_type,
  name,
  region,
  size_gigabytes,
  snapshot_id,
  tags,
}: ICreateVolumeApiRequest): Promise<Readonly<CreateVolumeResponse>> => {
  const url = `/volumes`;
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

  return httpClient.post<ICreateVolumeApiResponse>(url, body);
};
