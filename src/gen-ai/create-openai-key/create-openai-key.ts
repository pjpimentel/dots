import { IContext, IResponse } from '../../types';
import { IGenAiOpenAIKey, IGenAiExternalApiKeyCreateRequest } from '..';

export interface ICreateOpenAIKeyApiResponse {
  openai_key: IGenAiOpenAIKey;
}

export type CreateOpenAIKeyResponse = IResponse<ICreateOpenAIKeyApiResponse>;

export const createOpenAIKey = ({ httpClient }: IContext) => (
  data: IGenAiExternalApiKeyCreateRequest
): Promise<Readonly<CreateOpenAIKeyResponse>> => {
  const url = '/gen-ai/openai/keys';
  return httpClient.post<ICreateOpenAIKeyApiResponse>(url, data);
}; 