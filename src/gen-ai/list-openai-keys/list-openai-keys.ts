import { IContext, IListResponse, IResponse } from '../../types';
import { IGenAiOpenAIKey } from '..';

export interface IListOpenAIKeysApiResponse extends IListResponse {
  openai_keys: IGenAiOpenAIKey[];
}

export type ListOpenAIKeysResponse = IResponse<IListOpenAIKeysApiResponse>;

export const listOpenAIKeys = ({ httpClient }: IContext) => (): Promise<Readonly<ListOpenAIKeysResponse>> => {
  const url = '/gen-ai/openai/keys';
  return httpClient.get<IListOpenAIKeysApiResponse>(url);
}; 