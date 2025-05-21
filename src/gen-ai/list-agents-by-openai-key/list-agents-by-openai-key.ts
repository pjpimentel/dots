import { IContext, IListResponse, IResponse } from '../../types';
import { IGenAiAgent } from '..';

export interface IListAgentsByOpenAIKeyApiResponse extends IListResponse {
  agents: IGenAiAgent[];
}

export interface IListAgentsByOpenAIKeyApiRequest {
  key_uuid: string;
  page?: number;
  per_page?: number;
}

export type ListAgentsByOpenAIKeyResponse = IResponse<IListAgentsByOpenAIKeyApiResponse>;

export const listAgentsByOpenAIKey = ({ httpClient }: IContext) => (
  { key_uuid, page = 1, per_page = 25 }: IListAgentsByOpenAIKeyApiRequest
): Promise<Readonly<ListAgentsByOpenAIKeyResponse>> => {
  const url = `/gen-ai/openai/keys/${key_uuid}/agents`;
  const params = { page, per_page };
  return httpClient.get<IListAgentsByOpenAIKeyApiResponse>(url, { params });
};
