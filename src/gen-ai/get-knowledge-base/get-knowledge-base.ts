import { IContext, IResponse } from '../../types';
import { IGenAiKnowledgeBase } from '..';

export interface IGetKnowledgeBaseApiResponse {
  knowledge_base: IGenAiKnowledgeBase;
}

export interface IGetKnowledgeBaseApiRequest {
  knowledge_base_uuid: string;
}

export type GetKnowledgeBaseResponse = IResponse<IGetKnowledgeBaseApiResponse>;

export const getKnowledgeBase = ({ httpClient }: IContext) => (
  { knowledge_base_uuid }: IGetKnowledgeBaseApiRequest,
): Promise<Readonly<GetKnowledgeBaseResponse>> => {
  const url = `/gen-ai/knowledge_bases/${knowledge_base_uuid}`;
  return httpClient.get<IGetKnowledgeBaseApiResponse>(url);
}; 