import { IContext, IListResponse, IResponse } from '../../types';
import { IGenAiAgentRoute } from '..';

export interface IListAgentRoutesApiResponse extends IListResponse {
  routes: IGenAiAgentRoute[];
}

export interface IListAgentRoutesApiRequest {
  agent_uuid: string;
}

export type ListAgentRoutesResponse = IResponse<IListAgentRoutesApiResponse>;

export const listAgentRoutes = ({ httpClient }: IContext) => (
  { agent_uuid }: IListAgentRoutesApiRequest,
): Promise<Readonly<ListAgentRoutesResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/child_agents`;
  return httpClient.get<IListAgentRoutesApiResponse>(url);
}; 