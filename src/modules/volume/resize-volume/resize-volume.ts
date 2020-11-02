import { IResponse, IContext } from '../../../types';
import { IAction } from '../../action';

export interface IResizeVolumeToDropletApiResponse {
  action: IAction;
}

export interface IResizeVolumeToDropletApiRequest {
  region?: string;
  size_gigabytes: number;
  volume_id: string;
}

export type ResizeVolumeToDropletResponse = IResponse<IResizeVolumeToDropletApiResponse>;

export const resizeVolume = ({
  httpClient,
}: IContext) => ({
  region,
  size_gigabytes,
  volume_id,
}: IResizeVolumeToDropletApiRequest): Promise<Readonly<ResizeVolumeToDropletResponse>> => {
  const path = '/volumes';
  const type = 'resize';
  const body = {region, size_gigabytes, type};
  const url = `${path}/${volume_id}/actions`;

  return httpClient.post<IResizeVolumeToDropletApiResponse>(url, body);
};
