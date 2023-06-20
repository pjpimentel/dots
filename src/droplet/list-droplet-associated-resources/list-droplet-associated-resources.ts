import { IResponse, IContext } from '../../types';

export interface IDropletAssociatedResource {
  id: string;
  name: string;
  cost: string;
}

export interface IListDropletAssociatedResourcesApiResponse {
  snapshots: IDropletAssociatedResource[];
  volumes: IDropletAssociatedResource[];
  volume_snapshots: IDropletAssociatedResource[];
}

export interface IListDropletAssociatedResourcesApiRequest {
  droplet_id: number;
}

export type ListDropletAssociatedResourcesResponse = IResponse<IListDropletAssociatedResourcesApiResponse>;

export const listDropletAssociatedResources = ({
  httpClient,
}: IContext) => ({
  droplet_id,
}: IListDropletAssociatedResourcesApiRequest): Promise<Readonly<ListDropletAssociatedResourcesResponse>> => {
  const url = `/droplets/${droplet_id}/destroy_with_associated_resources`;

  return httpClient.get<IListDropletAssociatedResourcesApiResponse>(url);
};
