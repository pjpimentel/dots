import { IResponse, IContext } from '../../../types';
import { IDatabaseClusterDb } from '../types';

export interface ICreateDatabaseDbApiResponse {
  db: IDatabaseClusterDb;
}

export interface ICreateDatabaseDbApiRequest {
  database_cluster_id: string;
  db_name: string;
}

export type CreateDatabaseDbResponse = IResponse<ICreateDatabaseDbApiResponse>;

export const createDatabaseClusterDb = ({
  httpClient,
}: IContext) => ({
  database_cluster_id,
  db_name,
}: ICreateDatabaseDbApiRequest): Promise<Readonly<CreateDatabaseDbResponse>> => {
  const path = '/databases';
  const body = {name: db_name};
  const url = `${path}/${database_cluster_id}/dbs`;

  return httpClient.post<ICreateDatabaseDbApiResponse>(url, body);
};
