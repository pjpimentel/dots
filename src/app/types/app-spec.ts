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
  databases?: IAppDatabaseSpec[];
  domains?: IAppDomainSpec[];
  envs?: IAppVariableDefinition[];
  jobs?: IAppJobSpec[];
  name: string;
  region?: string;
  services?: IAppServiceSpec[];
  static_sites?: IAppStaticSiteSpec[];
  workers?: IAppWorkerSpec[];
}
