import { IContext, IListRequest, IListResponse, IResponse } from '../../types';
import { IGenAiKnowledgeBase } from '..';

export interface IListKnowledgeBasesApiResponse extends IListResponse {
  knowledge_bases: IGenAiKnowledgeBase[];
}

export type ListKnowledgeBasesResponse = IResponse<IListKnowledgeBasesApiResponse>;

export const listKnowledgeBases = ({ httpClient }: IContext) => (
  options?: IListRequest,
): Promise<Readonly<ListKnowledgeBasesResponse>> => {
  const url = '/gen-ai/knowledge_bases';
  const page = options?.page || 1;
  const per_page = options?.per_page || 25;
  const params = { page, per_page };
  return httpClient.get<IListKnowledgeBasesApiResponse>(url, { params });
}; 