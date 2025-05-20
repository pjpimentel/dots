import { IResponse, IContext } from '../../types';
import { IGenAiAgentApiKey } from '..';

export interface ICreateAgentKeyApiResponse {
  api_key_info: IGenAiAgentApiKey;
}

export interface ICreateAgentKeyApiRequest {
  agent_uuid: string;
  name?: string;
}

export type CreateAgentKeyResponse = IResponse<ICreateAgentKeyApiResponse>;

export const createAgentKey = ({ httpClient }: IContext) => ({ agent_uuid, name }: ICreateAgentKeyApiRequest): Promise<Readonly<CreateAgentKeyResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/api_keys`;
  const body = name ? { name } : {};
  return httpClient.post<ICreateAgentKeyApiResponse>(url, body);
};
