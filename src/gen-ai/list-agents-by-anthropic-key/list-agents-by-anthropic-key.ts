import { IContext, IListResponse, IResponse } from '../../types';
import { IGenAiAgent } from '..';

export interface IListAgentsByAnthropicKeyApiResponse extends IListResponse {
  agents: IGenAiAgent[];
}

export interface IListAgentsByAnthropicKeyApiRequest {
  key_uuid: string;
  page?: number;
  per_page?: number;
}

export type ListAgentsByAnthropicKeyResponse = IResponse<IListAgentsByAnthropicKeyApiResponse>;

export const listAgentsByAnthropicKey = ({ httpClient }: IContext) => (
  { key_uuid, page = 1, per_page = 25 }: IListAgentsByAnthropicKeyApiRequest
): Promise<Readonly<ListAgentsByAnthropicKeyResponse>> => {
  const url = `/gen-ai/anthropic/keys/${key_uuid}/agents`;
  const params = { page, per_page };
  return httpClient.get<IListAgentsByAnthropicKeyApiResponse>(url, { params });
};
