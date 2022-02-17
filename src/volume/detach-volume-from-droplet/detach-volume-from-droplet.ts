import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';

export interface IDetachVolumeToDropletApiResponse {
  action: IAction;
}

export interface IDetachVolumeToDropletApiRequest {
  droplet_id: number;
  region?: string;
  volume_id: string;
}

export type DetachVolumeToDropletResponse = IResponse<IDetachVolumeToDropletApiResponse>;

export const detachVolumeFromDroplet = ({
  httpClient,
}: IContext) => ({
  droplet_id,
  region,
  volume_id,
}: IDetachVolumeToDropletApiRequest): Promise<Readonly<DetachVolumeToDropletResponse>> => {
  const path = '/volumes';
  const type = 'detach';
  const body = {droplet_id, region, type};
  const url = `${path}/${volume_id}/actions`;

  return httpClient.post<IDetachVolumeToDropletApiResponse>(url, body);
};
