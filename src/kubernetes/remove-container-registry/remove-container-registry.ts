import { IResponse, IContext } from '../../types';

export interface IRemoveContainerRegistryApiRequest {
  cluster_uuids: string[];
}

export type RemoveContainerRegistryResponse = IResponse<void>;

export const removeContainerRegistry = ({
  httpClient,
}: IContext) => ({
  cluster_uuids,
}: IRemoveContainerRegistryApiRequest): Promise<Readonly<RemoveContainerRegistryResponse>> => {
  const url = '/kubernetes/clusters/registry';
  const body = {cluster_uuids};

  return httpClient.delete(url, {data: body});
};
