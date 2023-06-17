import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';

export interface IResizeDropletApiResponse {
  action: IAction;
}

export interface IResizeDropletApiRequest {
  disk?: boolean;
  droplet_id: number;
  size: string;
}

export type ResizeDropletResponse = IResponse<IResizeDropletApiResponse>;

export const resizeDroplet = ({
  httpClient,
}: IContext) => ({
  disk,
  droplet_id,
  size,
}: IResizeDropletApiRequest): Promise<Readonly<ResizeDropletResponse>> => {
  const url = `/droplets/${droplet_id}/actions`;
  const type = 'resize';
  const body = {disk, size, type};

  return httpClient.post<IResizeDropletApiResponse>(url, body);
};
