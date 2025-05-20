import { IContext, IResponse } from '../../types';
import { IGenAiAgent } from '..';

export interface IAttachKnowledgeBasesApiResponse {
  agent: IGenAiAgent;
}

export interface IAttachKnowledgeBasesApiRequest {
  agent_uuid: string;
  knowledge_base_uuids: string[];
}

export type AttachKnowledgeBasesResponse = IResponse<IAttachKnowledgeBasesApiResponse>;

export const attachKnowledgeBases = ({ httpClient }: IContext) => (
  { agent_uuid, knowledge_base_uuids }: IAttachKnowledgeBasesApiRequest,
): Promise<Readonly<AttachKnowledgeBasesResponse>> => {
  const url = `/gen-ai/agents/${agent_uuid}/knowledge_bases`;
  const body = { knowledge_base_uuids };
  return httpClient.post<IAttachKnowledgeBasesApiResponse>(url, body);
}; 