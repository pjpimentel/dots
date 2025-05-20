import { IContext, IResponse } from '../../types';
import { IGenAiKnowledgeBase, IGenAiKnowledgeBaseCreateRequest } from '..';

export interface ICreateKnowledgeBaseApiResponse {
  knowledge_base: IGenAiKnowledgeBase;
}

export type CreateKnowledgeBaseResponse = IResponse<ICreateKnowledgeBaseApiResponse>;

export const createKnowledgeBase = ({ httpClient }: IContext) => (
  knowledgeBase: IGenAiKnowledgeBaseCreateRequest,
): Promise<Readonly<CreateKnowledgeBaseResponse>> => {
  const url = '/gen-ai/knowledge_bases';
  return httpClient.post<ICreateKnowledgeBaseApiResponse>(url, knowledgeBase);
}; 