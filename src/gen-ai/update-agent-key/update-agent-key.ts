import { IResponse, IContext } from '../../types';
import { IGenAiAgentApiKey } from '..';

export interface IUpdateAgentKeyApiResponse {
  api_key_info: IGenAiAgentApiKey;
}

export interface IUpdateAgentKeyApiRequest {
  agent_uuid: string;
  api_key_uuid: string;
  name?: string;
  enabled?: boolean;
}

export type UpdateAgentKeyResponse = IResponse<IUpdateAgentKeyApiResponse>;

export const updateAgentKey = ({ httpClient }: IContext) => (
  { agent_uuid, api_key_uuid, name, enabled }: IUpdateAgentKeyApiRequest
): Promise<Readonly<UpdateAgentKeyResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/api_keys/${api_key_uuid}`;
  const body = { name, enabled };
  return httpClient.put<IUpdateAgentKeyApiResponse>(url, body);
};
