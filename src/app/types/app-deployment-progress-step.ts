import { IAppDeploymentProgressStepReason } from ".";

export type AppDeploymentProgresStepStatus = "PENDING" | "RUNNING" | "ERROR" | "SUCCESS";

export interface IAppDeploymentProgressStep {
  name: string;
  status: AppDeploymentProgresStepStatus | string;
  steps: IAppDeploymentProgressStep[];
  started_at: string;
  ended_at: string;
  reason: IAppDeploymentProgressStepReason[];
  component_name: string;
  message_base: string;
}
