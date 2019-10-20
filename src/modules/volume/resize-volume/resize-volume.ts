import { AxiosInstance } from 'axios';

export interface IResizeVolumeToDropletApiResponse {
  action: IAction;
}

export interface IResizeVolumeToDropletApiRequest {
  id: string;
  region?: string;
  size_gigabytes: number;
}

export type ResizeVolumeToDropletResponse = IResponse<IResizeVolumeToDropletApiResponse>;

export const resizeVolume = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
  region,
  size_gigabytes,
}: IResizeVolumeToDropletApiRequest): Promise<Readonly<ResizeVolumeToDropletResponse>> => {
  const path = '/volumes';
  const type = 'resize';
  const body = {region, size_gigabytes, type};
  const url = `${path}/${id}/actions`;

  return httpClient.post<IResizeVolumeToDropletApiResponse>(url, body);
};
