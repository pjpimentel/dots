import { IContext, IResponse } from '../../types';
import { IGenAiOpenAIKey } from '..';

export interface IGetOpenAIKeyApiResponse {
  openai_key: IGenAiOpenAIKey;
}

export interface IGetOpenAIKeyApiRequest {
  key_uuid: string;
}

export type GetOpenAIKeyResponse = IResponse<IGetOpenAIKeyApiResponse>;

export const getOpenAIKey = ({ httpClient }: IContext) => (
  { key_uuid }: IGetOpenAIKeyApiRequest
): Promise<Readonly<GetOpenAIKeyResponse>> => {
  const url = `/gen-ai/openai/keys/${key_uuid}`;
  return httpClient.get<IGetOpenAIKeyApiResponse>(url);
}; 