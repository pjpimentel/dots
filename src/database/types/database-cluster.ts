import {
  DatabaseClusterEngine,
  DatabaseClusterStatus,
  IDatabaseClusterConnection,
  IDatabaseClusterMaintenanceWindow,
  IDatabaseClusterUser,
} from '.';

export interface IDatabaseCluster {
  connection: IDatabaseClusterConnection;
  created_at: string;
  db_names: string[];
  engine: DatabaseClusterEngine;
  id: string;
  maintenance_window: IDatabaseClusterMaintenanceWindow;
  name: string;
  num_nodes: number;
  private_connection: IDatabaseClusterConnection;
  private_network_uuid: string;
  region: string;
  size: string;
  status: DatabaseClusterStatus;
  tags: string[];
  users: IDatabaseClusterUser[];
  version: string;
}
