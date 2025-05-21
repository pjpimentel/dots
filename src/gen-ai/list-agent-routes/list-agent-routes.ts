import { IContext, IListResponse, IResponse } from '../../types';
import { IGenAiAgentRoute } from '..';

export interface IListAgentRoutesApiResponse extends IListResponse {
  routes: IGenAiAgentRoute[];
}

export interface IListAgentRoutesApiRequest {
  agent_uuid: string;
  page?: number;
  per_page?: number;
}

export type ListAgentRoutesResponse = IResponse<IListAgentRoutesApiResponse>;

export const listAgentRoutes = ({ httpClient }: IContext) => (
  { agent_uuid, page = 1, per_page = 25 }: IListAgentRoutesApiRequest,
): Promise<Readonly<ListAgentRoutesResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/child_agents`;
  const params = { page, per_page };
  return httpClient.get<IListAgentRoutesApiResponse>(url, { params });
};
