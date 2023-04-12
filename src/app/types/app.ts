import { IAppDeployment, IAppSpec } from ".";

export interface IAppRegion {
  continent: string;
  data_centers: string[];
  flag: string;
  label: string;
  slug: string;
}

export interface IApp {
  active_deployment: IAppDeployment;
  created_at: string;
  default_ingress: string;
  domains: string[];
  id: string;
  in_progress_deployment?: IAppDeployment;
  last_deployment_active_at?: string;
  last_deployment_created_at: string;
  live_domain: string;
  live_url_base: string;
  live_url?: string;
  owner_uuid: string;
  pending_deployment?: IAppDeployment;
  project_id: string;
  region: IAppRegion;
  spec: IAppSpec;
  tier_slug: string;
  updated_at: string;
  pinned_deployment?: IAppDeployment;
}
