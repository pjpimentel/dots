import {
  IAppDeploymentJob,
  IAppDeploymentProgress,
  IAppDeploymentService,
  IAppDeploymentStaticSite,
  IAppDeploymentWorker,
  IAppSpec
} from ".";

export interface IAppDeployment {
  cause: string;
  cloned_from: string;
  created_at: string;
  id: string;
  jobs: IAppDeploymentJob[];
  phase_last_updated_at: string;
  phase: string;
  progress: IAppDeploymentProgress;
  services: IAppDeploymentService[];
  spec: IAppSpec;
  static_sites: IAppDeploymentStaticSite[];
  tier_slug: string;
  updated_at: string;
  workers: IAppDeploymentWorker[]
}
