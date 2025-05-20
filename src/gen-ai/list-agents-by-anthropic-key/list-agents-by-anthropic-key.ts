import { IContext, IListResponse, IResponse } from '../../types';
import { IGenAiAgent } from '..';

export interface IListAgentsByAnthropicKeyApiResponse extends IListResponse {
  agents: IGenAiAgent[];
}

export interface IListAgentsByAnthropicKeyApiRequest {
  key_uuid: string;
}

export type ListAgentsByAnthropicKeyResponse = IResponse<IListAgentsByAnthropicKeyApiResponse>;

export const listAgentsByAnthropicKey = ({ httpClient }: IContext) => (
  { key_uuid }: IListAgentsByAnthropicKeyApiRequest
): Promise<Readonly<ListAgentsByAnthropicKeyResponse>> => {
  const url = `/gen-ai/anthropic/keys/${key_uuid}/agents`;
  return httpClient.get<IListAgentsByAnthropicKeyApiResponse>(url);
}; 