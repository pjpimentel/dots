import { IResponse, IContext } from '../../types';
import { IGenAiAgent } from '..';

export interface IUpdateAgentApiResponse {
  agent: IGenAiAgent;
}

export interface IUpdateAgentApiRequest {
  agent_uuid: string;
  name?: string;
  instruction?: string;
  description?: string;
  tags?: string[];
}

export type UpdateAgentResponse = IResponse<IUpdateAgentApiResponse>;

export const updateAgent = ({ httpClient }: IContext) => ({ agent_uuid, ...body }: IUpdateAgentApiRequest): Promise<Readonly<UpdateAgentResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}`;
  return httpClient.put<IUpdateAgentApiResponse>(url, body);
};
