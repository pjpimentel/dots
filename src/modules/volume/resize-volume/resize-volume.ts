import { AxiosInstance } from 'axios';

export interface IResizeVolumeToDropletApiResponse extends IListResponse {
  action: IAction;
}

export interface IResizeVolumeToDropletApiRequest {
  id: string;
  region?: string;
  size_gigabytes: number;
}

type ResizeVolumeToDropletResponse = IResponse<IResizeVolumeToDropletApiResponse>;

export const resizeVolume = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
  region,
  size_gigabytes,
}: IResizeVolumeToDropletApiRequest): Promise<Readonly<ResizeVolumeToDropletResponse>> => {
  const path = `/volumes/${id}/actions`;
  const type = 'resize';
  const body = {region, size_gigabytes, type};
  const url = `${path}`;

  return httpClient.post<IResizeVolumeToDropletApiResponse>(url, body);
};
