import { IAppDeployment, IAppSpec } from ".";
import { IRegion } from '../../region';

export interface IApp {
  id: string;
  owner_uuid: string;
  spec: IAppSpec;
  default_ingress: string;
  created_at: string;
  updated_at: string;
  active_deployment: IAppDeployment;
  in_progress_deployment?: IAppDeployment;
  last_deployment_created_at: string;
  live_url: string;
  region: IRegion;
  tier_slug: string;
  live_url_base: string;
  live_domain: string;
  domains: string[];
}
