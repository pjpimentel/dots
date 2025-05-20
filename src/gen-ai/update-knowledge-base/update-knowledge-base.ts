import { IContext, IResponse } from '../../types';
import { IGenAiKnowledgeBase, IGenAiKnowledgeBaseUpdateRequest } from '..';

export interface IUpdateKnowledgeBaseApiResponse {
  knowledge_base: IGenAiKnowledgeBase;
}

export interface IUpdateKnowledgeBaseApiRequest {
  knowledge_base_uuid: string;
  updates: IGenAiKnowledgeBaseUpdateRequest;
}

export type UpdateKnowledgeBaseResponse = IResponse<IUpdateKnowledgeBaseApiResponse>;

export const updateKnowledgeBase = ({ httpClient }: IContext) => (
  { knowledge_base_uuid, updates }: IUpdateKnowledgeBaseApiRequest,
): Promise<Readonly<UpdateKnowledgeBaseResponse>> => {
  const url = `/gen-ai/knowledge_bases/${knowledge_base_uuid}`;
  return httpClient.put<IUpdateKnowledgeBaseApiResponse>(url, updates);
}; 