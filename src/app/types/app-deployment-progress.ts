import { IAppDeploymentProgressStep } from ".";

export interface IAppDeploymentProgress {
  error_steps: number;
  pending_steps: number;
  running_steps: number;
  steps: IAppDeploymentProgressStep[];
  success_steps: number;
  summary_steps: IAppDeploymentProgressStep[];
  total_steps: number;
}
