import { IResponse, IContext } from '../../../types';
import { IDatabaseCluster, DatabaseClusterEngine } from '..';

export interface ICreateDatabaseClusterApiResponse {
  database: IDatabaseCluster;
}

export interface ICreateDatabaseClusterApiRequest {
  engine: DatabaseClusterEngine;
  name: string;
  num_nodes: number;
  private_network_uuid?: string;
  region: string;
  size: string;
  tags?: string[];
  version?: string;
}

export type CreateDatabaseClusterResponse = IResponse<ICreateDatabaseClusterApiResponse>;

export const createDatabaseCluster = ({
  httpClient,
}: IContext) => ({
  engine,
  name,
  num_nodes,
  private_network_uuid,
  region,
  size,
  tags,
  version,
}: ICreateDatabaseClusterApiRequest): Promise<Readonly<CreateDatabaseClusterResponse>> => {
  const path = '/databases';
  const body = {
    engine,
    name,
    num_nodes,
    private_network_uuid,
    region,
    size,
    tags,
    version,
  };
  const url = `${path}`;

  return httpClient.post<ICreateDatabaseClusterApiResponse>(url, body);
};
