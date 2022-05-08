export interface IAppDatabaseSpec {
  cluster_name?: string;
  db_name?: string;
  db_user?: string;
  engine?: string;
  name: string;
  production: boolean;
  version: string;
}
