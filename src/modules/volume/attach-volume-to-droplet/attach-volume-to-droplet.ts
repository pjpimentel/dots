import { AxiosInstance } from 'axios';

export interface IAttachVolumeToDropletApiResponse extends IListResponse {
  action: IAction;
}

export interface IAttachVolumeToDropletApiRequest {
  droplet_id: number;
  id: string;
  region?: string;
}

export type AttachVolumeToDropletResponse = IResponse<IAttachVolumeToDropletApiResponse>;

export const attachVolumeToDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  droplet_id,
  id,
  region,
}: IAttachVolumeToDropletApiRequest): Promise<Readonly<AttachVolumeToDropletResponse>> => {
  const path = `/volumes/${id}/actions`;
  const type = 'attach';
  const body = {droplet_id, region, type};
  const url = `${path}`;

  return httpClient.post<IAttachVolumeToDropletApiResponse>(url, body);
};
