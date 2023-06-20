import { IResponse, IContext, IListRequest, IListResponse } from '../../types';

export interface IDatabaseClusterBackup {
  size_gigabytes: number;
  created_at: string;
}

export interface IListDatabaseClusterBackupsApiResponse extends IListResponse {
  backups: IDatabaseClusterBackup[];
}

export interface IListDatabaseClusterBackupsApiRequest extends IListRequest {
  database_cluster_id: string;
}

export type ListDatabaseClusterBackupsResponse = IResponse<IListDatabaseClusterBackupsApiResponse>;

export const listDatabaseClusterBackups = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
  database_cluster_id,
}: IListDatabaseClusterBackupsApiRequest): Promise<Readonly<ListDatabaseClusterBackupsResponse>> => {
  const url = `/databases/${database_cluster_id}/backups`;
  const query_params = {page, per_page};

  return httpClient.get<IListDatabaseClusterBackupsApiResponse>(url, {params: query_params});
};
