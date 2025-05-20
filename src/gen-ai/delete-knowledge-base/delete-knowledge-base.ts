import { IContext, IResponse } from '../../types';

export interface IDeleteKnowledgeBaseApiRequest {
  knowledge_base_uuid: string;
}

export type DeleteKnowledgeBaseResponse = IResponse<void>;

export const deleteKnowledgeBase = ({ httpClient }: IContext) => (
  { knowledge_base_uuid }: IDeleteKnowledgeBaseApiRequest,
): Promise<Readonly<DeleteKnowledgeBaseResponse>> => {
  const url = `/gen-ai/knowledge_bases/${knowledge_base_uuid}`;
  return httpClient.delete<void>(url);
}; 