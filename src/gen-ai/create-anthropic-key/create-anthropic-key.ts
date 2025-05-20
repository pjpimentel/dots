import { IContext, IResponse } from '../../types';
import { IGenAiAnthropicKey, IGenAiExternalApiKeyCreateRequest } from '..';

export interface ICreateAnthropicKeyApiResponse {
  anthropic_key: IGenAiAnthropicKey;
}

export type CreateAnthropicKeyResponse = IResponse<ICreateAnthropicKeyApiResponse>;

export const createAnthropicKey = ({ httpClient }: IContext) => (
  data: IGenAiExternalApiKeyCreateRequest
): Promise<Readonly<CreateAnthropicKeyResponse>> => {
  const url = '/gen-ai/anthropic/keys';
  return httpClient.post<ICreateAnthropicKeyApiResponse>(url, data);
}; 