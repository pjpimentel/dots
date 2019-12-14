import { IResponse, IContext, IListRequest, IListResponse } from '../../../types';
import { IKubernetesCluster } from '..';

export interface IListKubernetesClusterApiResponse extends IListResponse {
  kubernetes_clusters: IKubernetesCluster[];
}

export type ListKubernetesClusterResponse = IResponse<IListKubernetesClusterApiResponse>;

export const listKubernetesClusters = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListKubernetesClusterResponse>> => {
  const path = '/kubernetes';
  const queryParams = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListKubernetesClusterApiResponse>(url, {params: queryParams});
};
