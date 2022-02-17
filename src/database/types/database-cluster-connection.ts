export interface IDatabaseClusterConnection {
  database: string;
  host: string;
  password: string;
  port: number;
  ssl: boolean;
  uri: string;
  user: string;
}
