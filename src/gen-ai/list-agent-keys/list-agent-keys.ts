import { IResponse, IListResponse, IContext } from '../../types';
import { IGenAiAgentApiKey } from '..';

export interface IListAgentKeysApiResponse extends IListResponse {
  api_key_infos: IGenAiAgentApiKey[];
}

export interface IListAgentKeysApiRequest {
  agent_uuid: string;
}

export type ListAgentKeysResponse = IResponse<IListAgentKeysApiResponse>;

export const listAgentKeys = ({ httpClient }: IContext) => ({ agent_uuid }: IListAgentKeysApiRequest): Promise<Readonly<ListAgentKeysResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/api_keys`;
  return httpClient.get<IListAgentKeysApiResponse>(url);
};
