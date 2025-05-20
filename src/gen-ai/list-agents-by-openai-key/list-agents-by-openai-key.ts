import { IContext, IListResponse, IResponse } from '../../types';
import { IGenAiAgent } from '..';

export interface IListAgentsByOpenAIKeyApiResponse extends IListResponse {
  agents: IGenAiAgent[];
}

export interface IListAgentsByOpenAIKeyApiRequest {
  key_uuid: string;
}

export type ListAgentsByOpenAIKeyResponse = IResponse<IListAgentsByOpenAIKeyApiResponse>;

export const listAgentsByOpenAIKey = ({ httpClient }: IContext) => (
  { key_uuid }: IListAgentsByOpenAIKeyApiRequest
): Promise<Readonly<ListAgentsByOpenAIKeyResponse>> => {
  const url = `/gen-ai/openai/keys/${key_uuid}/agents`;
  return httpClient.get<IListAgentsByOpenAIKeyApiResponse>(url);
}; 