import { IContext, IResponse } from '../../types';
import { IGenAiAgentDeploymentVisibility } from '..';

export interface IUpdateAgentVisibilityApiResponse {
  url?: string;
  agent?: {
    url?: string;
    endpoint?: {
      url?: string;
      visibility?: string;
    };
  };
}

export interface IUpdateAgentVisibilityApiRequest {
  agent_uuid: string;
  visibility: 'VISIBILITY_PUBLIC' | 'VISIBILITY_PRIVATE';
}

export type UpdateAgentVisibilityResponse = IResponse<IUpdateAgentVisibilityApiResponse>;

export const updateAgentVisibility = ({ httpClient }: IContext) => (
  { agent_uuid, visibility }: IUpdateAgentVisibilityApiRequest,
): Promise<Readonly<UpdateAgentVisibilityResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/deployment_visibility`;
  const body = {
    uuid: agent_uuid,
    visibility
  };
  return httpClient.put<IUpdateAgentVisibilityApiResponse>(url, body);
}; 