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
}: IContext<AxiosInstance>) => async ({
  droplet_id,
  id,
  region,
}: IDetachVolumeToDropletApiRequest): Promise<Readonly<DetachVolumeToDropletResponse>> => {
  const path = `/volumes/${id}/actions`;
  const type = 'detach';
  const body = {droplet_id, region, type};
  const url = `${path}`;

  return httpClient.post<IDetachVolumeToDropletApiResponse>(url, body);
};
