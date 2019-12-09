import { IResponse, IContext } from '../../../types';
import { IAction } from '../../action';

export interface IAttachVolumeToDropletApiResponse {
  action: IAction;
}

export interface IAttachVolumeToDropletApiRequest {
  droplet_id: number;
  id?: string;
  region?: string;
  volume_id: string;
}

export type AttachVolumeToDropletResponse = IResponse<IAttachVolumeToDropletApiResponse>;

export const attachVolumeToDroplet = ({
  httpClient,
}: IContext) => ({
  droplet_id,
  id,
  region,
  volume_id,
}: IAttachVolumeToDropletApiRequest): Promise<Readonly<AttachVolumeToDropletResponse>> => {
  const path = '/volumes';
  const type = 'attach';
  const body = {droplet_id, region, type};
  const url = `${path}/${volume_id || id}/actions`;

  return httpClient.post<IAttachVolumeToDropletApiResponse>(url, body);
};
