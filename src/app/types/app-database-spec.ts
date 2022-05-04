export interface IAppDatabaseSpec {
  /**
   * The name of the underlying DigitalOcean DBaaS cluster. This is required for production databases. For dev databases, if cluster_name is not set, a new cluster will be provisioned.
   */
  cluster_name?: string;

  /**
   * The name of the MySQL or PostgreSQL database to configure.
   */
  db_name?: string;

  /**
   * The name of the MySQL or PostgreSQL user to configure.
   */
  db_user?: string;

  /**
   * Default: "UNSET"
   * Enum: "UNSET" "MYSQL" "PG" "REDIS"
   * MYSQL: MySQL
   * PG: PostgreSQL
   * REDIS: Redis
   */
  engine?: "UNSET" | "MYSQL" | "PG" | "REDIS";

  /**
   * The name. Must be unique across all components within the same app.
   * string [ 2 .. 32 ] characters ^[a-z][a-z0-9-]{0,30}[a-z0-9]$
   */
  name: string;

  /**
   * Whether this is a production or dev database.
   */
  production: boolean;

  /**
   * The version of the database engine
   */
  version: string;
}
