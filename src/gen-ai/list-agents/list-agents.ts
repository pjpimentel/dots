import { IResponse, IListRequest, IListResponse, IContext } from '../../types';
import { IGenAiAgent } from '..';

export interface IListAgentsApiResponse extends IListResponse {
  agents: IGenAiAgent[];
}

export type ListAgentsResponse = IResponse<IListAgentsApiResponse>;

export const listAgents = ({ httpClient }: IContext) => ({ page = 1, per_page = 25 }: IListRequest = {}): Promise<Readonly<ListAgentsResponse>> => {
  const url = '/gen-ai/agents';
  const params = { page, per_page };
  return httpClient.get<IListAgentsApiResponse>(url, { params });
};
