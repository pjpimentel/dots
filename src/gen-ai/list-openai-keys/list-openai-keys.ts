import { IContext, IListResponse, IResponse } from '../../types';
import { IGenAiOpenAIKey } from '..';

export interface IListOpenAIKeysApiResponse extends IListResponse {
  openai_keys: IGenAiOpenAIKey[];
}

export type ListOpenAIKeysResponse = IResponse<IListOpenAIKeysApiResponse>;

export const listOpenAIKeys = ({ httpClient }: IContext) => (
  { page = 1, per_page = 25 }: { page?: number; per_page?: number } = {},
): Promise<Readonly<ListOpenAIKeysResponse>> => {
  const url = '/gen-ai/openai/keys';
  const params = { page, per_page };
  return httpClient.get<IListOpenAIKeysApiResponse>(url, { params });
};
