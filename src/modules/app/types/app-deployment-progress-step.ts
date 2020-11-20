import { IAppDeploymentProgressStepReason } from ".";

export interface IAppDeploymentProgressStep {
    name:	string;
    status: 'PENDING' | 'RUNNING' | 'ERROR' | 'SUCCESS'| string;
    steps: IAppDeploymentProgressStep[]
    started_at:	string;
    ended_at:	string;
    reason: IAppDeploymentProgressStepReason[];
    component_name: string;
    message_base: string;
  }
