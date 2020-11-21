import { IAppDeployment, IAppSpec } from ".";

export interface IApp{
  id: string;
  spec: IAppSpec;
  default_ingress: string;
  created_at: string;
  updated_at: string;
  active_deployment: IAppDeployment;
}
