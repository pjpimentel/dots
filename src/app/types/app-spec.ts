import {
  IAppDatabaseSpec,
  IAppDomainSpec,
  IAppJobSpec,
  IAppServiceSpec,
  IAppStaticSiteSpec,
  IAppVariableDefinition,
  IAppWorkerSpec,
} from ".";

export interface IAppSpec {
  /**
   * [ 2 .. 32 ] characters ^[a-z][a-z0-9-]{0,30}[a-z0-9]$
   * The name of the app. Must be unique across all apps in the same account.
   */
  name: string;

  /**
   * Enum: "ams" "nyc" "fra"
   * The slug form of the geographical origin of the app. Default: nearest available
   */
  region?: string;

  /**
   * A set of hostnames where the application will be available.
   */
  domains?: IAppDomainSpec[];

  /**
   * Workloads which expose publicy-accessible HTTP services.
   */
  services?: IAppServiceSpec[];

  /**
   * Content which can be rendered to static web assets.
   */
  static_sites?: IAppStaticSiteSpec[];

  /**
   * Pre and post deployment workloads which do not expose publicly-accessible HTTP routes.
   */
  jobs?: IAppJobSpec[];

  /**
   * Workloads which do not expose publicly-accessible HTTP services.
   */
  workers?: IAppWorkerSpec[];

  /**
   * Database instances which can provide persistence to workloads within the application.
   */
  databases?: IAppDatabaseSpec[];

  /**
   * A list of environment variables made available to the component.
   */
  envs?: IAppVariableDefinition[];
}
