import { IContext, IResponse } from '../../types';
import { IGenAiAgent } from '..';

export interface IAttachKnowledgeBaseApiResponse {
  agent: IGenAiAgent;
}

export interface IAttachKnowledgeBaseApiRequest {
  agent_uuid: string;
  knowledge_base_uuid: string;
}

export type AttachKnowledgeBaseResponse = IResponse<IAttachKnowledgeBaseApiResponse>;

export const attachKnowledgeBase = ({ httpClient }: IContext) => (
  { agent_uuid, knowledge_base_uuid }: IAttachKnowledgeBaseApiRequest,
): Promise<Readonly<AttachKnowledgeBaseResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/knowledge_bases/${knowledge_base_uuid}`;
  return httpClient.post<IAttachKnowledgeBaseApiResponse>(url);
}; 