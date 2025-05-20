import { IContext, IResponse } from '../../types';
import { IGenAiAgentRoute, IGenAiAgentRouteUpdateRequest } from '..';

export interface IUpdateAgentRouteApiResponse {
  agent_route: IGenAiAgentRoute;
}

export interface IUpdateAgentRouteApiRequest {
  parent_agent_uuid: string;
  child_agent_uuid: string;
  updates: IGenAiAgentRouteUpdateRequest;
}

export type UpdateAgentRouteResponse = IResponse<IUpdateAgentRouteApiResponse>;

export const updateAgentRoute = ({ httpClient }: IContext) => (
  { parent_agent_uuid, child_agent_uuid, updates }: IUpdateAgentRouteApiRequest,
): Promise<Readonly<UpdateAgentRouteResponse>> => {
  const url = `/gen-ai/agents/${parent_agent_uuid}/child_agents/${child_agent_uuid}`;
  return httpClient.put<IUpdateAgentRouteApiResponse>(url, updates);
}; 