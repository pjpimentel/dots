import { IResponse, IContext } from '../../../types';
import { DatabaseClusterEvictionPolicy } from '..';

export interface IGetDatabaseClusterEvictionPolicyApiResponse {
  eviction_policy: DatabaseClusterEvictionPolicy;
}

export interface IGetDatabaseClusterEvictionPolicyApiRequest {
  database_cluster_id: string;
}

export type GetDatabaseClusterEvictionPolicyResponse = IResponse<IGetDatabaseClusterEvictionPolicyApiResponse>;

export const getDatabaseClusterEvictionPolicy = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
}: IGetDatabaseClusterEvictionPolicyApiRequest): Promise<Readonly<GetDatabaseClusterEvictionPolicyResponse>> => {
  const path = '/databases';
  const url = `${path}/${database_cluster_id}/eviction_policy`;

  return httpClient.get<IGetDatabaseClusterEvictionPolicyApiResponse>(url);
};
