import { AxiosInstance } from 'axios';

export interface IDetachVolumeToDropletApiResponse extends IListResponse {
  action: IAction;
}

export interface IDetachVolumeToDropletApiRequest {
  droplet_id: number;
  id: string;
  region?: string;
}

export type DetachVolumeToDropletResponse = IResponse<IDetachVolumeToDropletApiResponse>;

export const detachVolumeFromDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  droplet_id,
  id,
  region,
}: IDetachVolumeToDropletApiRequest): Promise<Readonly<DetachVolumeToDropletResponse>> => {
  const path = '/volumes';
  const type = 'detach';
  const body = {droplet_id, region, type};
  const url = `${path}/${id}/actions`;

  return httpClient.post<IDetachVolumeToDropletApiResponse>(url, body);
};
