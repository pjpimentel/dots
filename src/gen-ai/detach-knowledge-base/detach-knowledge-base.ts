import { IContext, IResponse } from '../../types';

export interface IDetachKnowledgeBaseApiRequest {
  agent_uuid: string;
  knowledge_base_uuid: string;
}

export type DetachKnowledgeBaseResponse = IResponse<void>;

export const detachKnowledgeBase = ({ httpClient }: IContext) => (
  { agent_uuid, knowledge_base_uuid }: IDetachKnowledgeBaseApiRequest,
): Promise<Readonly<DetachKnowledgeBaseResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/knowledge_bases/${knowledge_base_uuid}`;
  return httpClient.delete<void>(url);
}; 