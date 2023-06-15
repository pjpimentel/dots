import { IResponse, IContext } from '../../types';

export interface IResizeDatabaseClusterApiRequest {
  database_cluster_id: string;
  num_nodes: number;
  size: string;
}

export type ResizeDatabaseClusterResponse = IResponse<void>;

export const resizeDatabaseCluster = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
  num_nodes,
  size,
}: IResizeDatabaseClusterApiRequest): Promise<Readonly<ResizeDatabaseClusterResponse>> => {
  const url = `/databases/${database_cluster_id}/resize`;
  const body = {
    num_nodes,
    size,
  };

  return httpClient.put<void>(url, body);
};
