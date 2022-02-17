import { IAppDeploymentProgressStep } from ".";

export interface IAppDeploymentProgress {
    pending_steps: number;
    running_steps: number;
    success_steps: number;
    error_steps: number;
    total_steps: number;
    steps:	IAppDeploymentProgressStep[];
    summary_steps: IAppDeploymentProgressStep[];
  }
