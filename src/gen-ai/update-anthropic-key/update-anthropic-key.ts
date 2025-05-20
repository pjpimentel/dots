import { IContext, IResponse } from '../../types';
import { IGenAiAnthropicKey, IGenAiExternalApiKeyUpdateRequest } from '..';

export interface IUpdateAnthropicKeyApiResponse {
  anthropic_key: IGenAiAnthropicKey;
}

export interface IUpdateAnthropicKeyApiRequest {
  key_uuid: string;
  updates: IGenAiExternalApiKeyUpdateRequest;
}

export type UpdateAnthropicKeyResponse = IResponse<IUpdateAnthropicKeyApiResponse>;

export const updateAnthropicKey = ({ httpClient }: IContext) => (
  { key_uuid, updates }: IUpdateAnthropicKeyApiRequest
): Promise<Readonly<UpdateAnthropicKeyResponse>> => {
  const url = `/gen-ai/anthropic/keys/${key_uuid}`;
  return httpClient.put<IUpdateAnthropicKeyApiResponse>(url, updates);
}; 