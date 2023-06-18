import { IResponse, IContext } from '../../types';

export interface IAddContainerRegistryApiRequest {
  cluster_uuids: string[];
}

export type AddContainerRegistryResponse = IResponse<void>;

export const addContainerRegistry = ({
  httpClient,
}: IContext) => ({
  cluster_uuids,
}: IAddContainerRegistryApiRequest): Promise<Readonly<AddContainerRegistryResponse>> => {
  const url = '/kubernetes/clusters/registry';
  const body = {cluster_uuids};

  return httpClient.post(url, body);
};
