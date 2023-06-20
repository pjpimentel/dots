import { IResponse, IContext } from '../../types';
import { IDroplet } from '..';

export interface IDropletAssociatedResourceStatus {
  destroyed_at: string;
  error_message: string;
  id: string;
  name: string;
}

export interface IGetDropletDestroyResourceStatusApi {
  snapshots: IDropletAssociatedResourceStatus[];
  volumes: IDropletAssociatedResourceStatus[];
  volume_snapshots: IDropletAssociatedResourceStatus[];
}

export interface IGetDropletDestroyStatusApiResponse {
  completed_at: string;
  droplet: Partial<IDroplet>;
  failures: number;
  resources: IGetDropletDestroyResourceStatusApi;
}

export interface IGetDropletDestroyStatusApiRequest {
  droplet_id: number;
}

export type GetDropletDestroyStatusResponse = IResponse<IGetDropletDestroyStatusApiResponse>;

export const getDropletDestroyStatus = ({
  httpClient,
}: IContext) => ({
  droplet_id,
}: IGetDropletDestroyStatusApiRequest): Promise<Readonly<GetDropletDestroyStatusResponse>> => {
  const url = `/droplets/${droplet_id}/destroy_with_associated_resources/status`;

  return httpClient.get<IGetDropletDestroyStatusApiResponse>(url);
};
