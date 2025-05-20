import { IContext, IResponse } from '../../types';
import { IGenAiOpenAIKey, IGenAiExternalApiKeyUpdateRequest } from '..';

export interface IUpdateOpenAIKeyApiResponse {
  openai_key: IGenAiOpenAIKey;
}

export interface IUpdateOpenAIKeyApiRequest {
  key_uuid: string;
  updates: IGenAiExternalApiKeyUpdateRequest;
}

export type UpdateOpenAIKeyResponse = IResponse<IUpdateOpenAIKeyApiResponse>;

export const updateOpenAIKey = ({ httpClient }: IContext) => (
  { key_uuid, updates }: IUpdateOpenAIKeyApiRequest
): Promise<Readonly<UpdateOpenAIKeyResponse>> => {
  const url = `/gen-ai/openai/keys/${key_uuid}`;
  return httpClient.put<IUpdateOpenAIKeyApiResponse>(url, updates);
}; 