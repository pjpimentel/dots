import { IContext, IResponse } from '../../types';
import { IGenAiAgentApiKey } from '..';

export interface IRegenerateAgentKeyApiResponse {
  api_key_info: IGenAiAgentApiKey;
}

export interface IRegenerateAgentKeyApiRequest {
  agent_uuid: string;
  api_key_uuid: string;
}

export type RegenerateAgentKeyResponse = IResponse<IRegenerateAgentKeyApiResponse>;

export const regenerateAgentKey = ({ httpClient }: IContext) => (
  { agent_uuid, api_key_uuid }: IRegenerateAgentKeyApiRequest,
): Promise<Readonly<RegenerateAgentKeyResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/api_keys/${api_key_uuid}/regenerate`;
  return httpClient.put<IRegenerateAgentKeyApiResponse>(url);
}; 