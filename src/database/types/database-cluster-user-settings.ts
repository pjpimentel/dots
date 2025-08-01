import { IDatabaseClusterMongoUserSettings } from "./database-cluster-mongo-user-settings";

export interface IDatabaseClusterUserSettings {
  pg_allow_replication?: boolean
  mongo_user_settings?: IDatabaseClusterMongoUserSettings;
  opensearch_acl?: {
    index: string
    permission: string
  }[]
  acl?: {
    id: string
    topic: string
    permission: string
  }[]
}
