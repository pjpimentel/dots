import { IContext, IResponse } from '../../types';
import { IGenAiAgentRoute, IGenAiAgentRouteCreateRequest } from '..';

export interface IAttachAgentRouteApiResponse {
  agent_route: IGenAiAgentRoute;
}

export interface IAttachAgentRouteApiRequest {
  parent_agent_uuid: string;
  child_agent_uuid: string;
  route: IGenAiAgentRouteCreateRequest;
}

export type AttachAgentRouteResponse = IResponse<IAttachAgentRouteApiResponse>;

export const attachAgentRoute = ({ httpClient }: IContext) => (
  { parent_agent_uuid, child_agent_uuid, route }: IAttachAgentRouteApiRequest,
): Promise<Readonly<AttachAgentRouteResponse>> => {
  const url = `/gen-ai/agents/${parent_agent_uuid}/child_agents/${child_agent_uuid}`;
  const body = {
    parent_agent_uuid,
    child_agent_uuid,
    ...route
  };
  return httpClient.post<IAttachAgentRouteApiResponse>(url, body);
}; 