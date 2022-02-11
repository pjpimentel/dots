import { IResponse, IContext } from '../../types';

export interface IdestroyDropletAndAssociatedResourcesApiRequest {
  droplet_id: number;
  snapshots: string[];
  volume_snapshots: string[];
  volumes: string[];
}

export type destroyDropletAndAssociatedResourcesResponse = IResponse<void>;

export const destroyDropletAndAssociatedResources = ({
  httpClient,
}: IContext) => ({
  droplet_id,
  snapshots,
  volume_snapshots,
  volumes,
}: IdestroyDropletAndAssociatedResourcesApiRequest): Promise<Readonly<destroyDropletAndAssociatedResourcesResponse>> => {
  const path = '/droplets';
  const url = `${path}/${droplet_id}/destroy_with_associated_resources/selective`;
  const body = {
    snapshots,
    volume_snapshots,
    volumes,
  };

  return httpClient.delete(url, {data: body});
};
