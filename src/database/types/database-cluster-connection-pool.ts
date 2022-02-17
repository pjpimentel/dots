import {
  IDatabaseClusterConnection,
  DatabaseClusterConnectionPoolMode,
} from '.';

export interface IDatabaseClusterConnectionPool {
  connection: IDatabaseClusterConnection;
  user: string;
  name: string;
  size: number;
  db: string;
  mode: DatabaseClusterConnectionPoolMode;
}
