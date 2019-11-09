import { IResponse, IContext } from '../../../types';
import { IAction } from '../../action';

export interface IDetachVolumeToDropletApiResponse {
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
}: IContext) => ({
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
