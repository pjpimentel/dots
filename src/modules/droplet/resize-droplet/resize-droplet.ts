import { AxiosInstance } from 'axios';

export interface IResizeDropletApiResponse {
  action: IAction;
}

export interface IResizeDropletApiRequest {
  disk?: boolean;
  id: string;
  size: string;
}

export type ResizeDropletResponse = IResponse<IResizeDropletApiResponse>;

export const resizeDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  disk,
  id,
  size,
}: IResizeDropletApiRequest): Promise<Readonly<ResizeDropletResponse>> => {
  const path = '/droplets';
  const type = 'resize';
  const body = {disk, size, type};
  const url = `${path}/${id}/actions`;

  return httpClient.post<IResizeDropletApiResponse>(url, body);
};
