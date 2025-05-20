import { IResponse, IListRequest, IListResponse, IContext } from '../../types';
import { IGenAiAgent } from '..';

export interface IListAgentsApiResponse extends IListResponse {
  agents: IGenAiAgent[];
}

export type ListAgentsResponse = IResponse<IListAgentsApiResponse>;

export interface IListAgentsApiRequest extends IListRequest {
  only_deployed?: boolean;
}

export const listAgents = ({ httpClient }: IContext) => (
  { page = 1, per_page = 25, only_deployed }: IListAgentsApiRequest = {}
): Promise<Readonly<ListAgentsResponse>> => {
  const url = '/gen-ai/agents';
  const params = { page, per_page, only_deployed };
  return httpClient.get<IListAgentsApiResponse>(url, { params });
};
