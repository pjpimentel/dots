import { IAppDeploymentService, IAppSpec } from ".";

export interface IAppDeployment {
  cause: string;
  created_at: string;
  id: string;
  progress: any; // TODO:
  services: IAppDeploymentService[];
  spec: IAppSpec;
  updated_at: string;
}
