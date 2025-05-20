import { IContext, IResponse } from '../../types';

export interface IDeleteKnowledgeBaseDataSourceApiRequest {
  knowledge_base_uuid: string;
  data_source_uuid: string;
}

export type DeleteKnowledgeBaseDataSourceResponse = IResponse<void>;

export const deleteKnowledgeBaseDataSource = ({ httpClient }: IContext) => (
  { knowledge_base_uuid, data_source_uuid }: IDeleteKnowledgeBaseDataSourceApiRequest,
): Promise<Readonly<DeleteKnowledgeBaseDataSourceResponse>> => {
  const url = `/gen-ai/knowledge_bases/${knowledge_base_uuid}/data_sources/${data_source_uuid}`;
  return httpClient.delete<void>(url);
}; 