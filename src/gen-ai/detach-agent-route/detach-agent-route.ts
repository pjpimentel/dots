import { IContext, IResponse } from '../../types';

export interface IDetachAgentRouteApiRequest {
  parent_agent_uuid: string;
  child_agent_uuid: string;
}

export type DetachAgentRouteResponse = IResponse<void>;

export const detachAgentRoute = ({ httpClient }: IContext) => (
  { parent_agent_uuid, child_agent_uuid }: IDetachAgentRouteApiRequest,
): Promise<Readonly<DetachAgentRouteResponse>> => {
  const url = `/gen-ai/agents/${parent_agent_uuid}/child_agents/${child_agent_uuid}`;
  return httpClient.delete<void>(url);
}; 