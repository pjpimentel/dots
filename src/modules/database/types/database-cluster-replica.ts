import {
  DatabaseClusterStatus,
  IDatabaseClusterConnection,
} from '.';

export interface IDatabaseClusterReplica {
  connection: IDatabaseClusterConnection;
  created_at: string;
  name: string;
  private_connection: IDatabaseClusterConnection;
  region: string;
  status: DatabaseClusterStatus;
  tags: string[];
}
