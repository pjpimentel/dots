import { IResponse, IContext } from '../../types';

export interface IdestroyDropletAndAllAssociatedResourcesApiRequest {
  acknowledge: boolean;
  droplet_id: number;
}

export type destroyDropletAndAllAssociatedResourcesResponse = IResponse<void>;

export const destroyDropletAndAllAssociatedResources = ({
  httpClient,
}: IContext) => ({
  acknowledge,
  droplet_id,
}: IdestroyDropletAndAllAssociatedResourcesApiRequest): Promise<Readonly<destroyDropletAndAllAssociatedResourcesResponse>> => {
  const path = '/droplets';
  const url = `${path}/${droplet_id}/destroy_with_associated_resources/dangerous`;
  const headers = {
    'X-Dangerous': `${acknowledge}`,
  };
  return httpClient.delete(url, {headers, data: undefined});
};
