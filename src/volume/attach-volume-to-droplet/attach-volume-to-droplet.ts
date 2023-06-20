import { IResponse, IContext } from '../../types';
import { IAction } from '../../action';

export interface IAttachVolumeToDropletApiResponse {
  action: IAction;
}

export interface IAttachVolumeToDropletApiRequest {
  droplet_id: number;
  region?: string;
  volume_id: string;
}

export type AttachVolumeToDropletResponse = IResponse<IAttachVolumeToDropletApiResponse>;

export const attachVolumeToDroplet = ({
  httpClient,
}: IContext) => ({
  droplet_id,
  region,
  volume_id,
}: IAttachVolumeToDropletApiRequest): Promise<Readonly<AttachVolumeToDropletResponse>> => {
  const url = `/volumes/${volume_id}/actions`;
  const type = 'attach';
  const body = {droplet_id, region, type};

  return httpClient.post<IAttachVolumeToDropletApiResponse>(url, body);
};
