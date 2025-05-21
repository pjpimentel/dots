import { IResponse, IListResponse, IContext } from '../../types';
import { IGenAiAgentApiKey } from '..';

export interface IListAgentKeysApiResponse extends IListResponse {
  api_key_infos: IGenAiAgentApiKey[];
}

export interface IListAgentKeysApiRequest {
  agent_uuid: string;
  page?: number;
  per_page?: number;
}

export type ListAgentKeysResponse = IResponse<IListAgentKeysApiResponse>;

export const listAgentKeys = ({ httpClient }: IContext) => (
  { agent_uuid, page = 1, per_page = 25 }: IListAgentKeysApiRequest,
): Promise<Readonly<ListAgentKeysResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/api_keys`;
  const params = { page, per_page };
  return httpClient.get<IListAgentKeysApiResponse>(url, { params });
};
