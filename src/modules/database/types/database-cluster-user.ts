import { IDatabaseClusterMysqlUserSettings } from '.';

export interface IDatabaseClusterUser {
  name: string;
  password: string;
  role: string;
  mysql_settings?: IDatabaseClusterMysqlUserSettings;
}
