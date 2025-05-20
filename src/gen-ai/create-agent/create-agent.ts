import { IResponse, IContext } from '../../types';
import { IGenAiAgent } from '..';

export interface ICreateAgentApiResponse {
  agent: IGenAiAgent;
}

export interface ICreateAgentApiRequest {
  name: string;
  model_uuid: string;
  instruction: string;
  project_id: string;
  region: string;
  description?: string;
  tags?: string[];
  knowledge_base_uuids?: string[];
}

export type CreateAgentResponse = IResponse<ICreateAgentApiResponse>;

export const createAgent = ({ httpClient }: IContext) => (data: ICreateAgentApiRequest): Promise<Readonly<CreateAgentResponse>> => {
  const url = '/gen-ai/agents';
  return httpClient.post<ICreateAgentApiResponse>(url, data);
};
