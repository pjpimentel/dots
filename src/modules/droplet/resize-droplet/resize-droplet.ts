import { AxiosInstance } from 'axios';

export interface IResizeDropletApiResponse extends IListResponse {
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
}: IContext<AxiosInstance>) => async ({
  disk,
  id,
  size,
}: IResizeDropletApiRequest): Promise<Readonly<ResizeDropletResponse>> => {
  const path = `/droplets/${id}/actions`;
  const type = 'resize';
  const body = {disk, size, type};
  const url = `${path}`;

  return httpClient.post<IResizeDropletApiResponse>(url, body);
};
