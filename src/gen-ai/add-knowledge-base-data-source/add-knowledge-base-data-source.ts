import { IContext, IResponse } from '../../types';
import { IGenAiDataSourceRequest, IGenAiDataSource } from '..';

export interface IAddKnowledgeBaseDataSourceApiResponse {
  knowledge_base_data_source: IGenAiDataSource;
}

export interface IAddKnowledgeBaseDataSourceApiRequest {
  knowledge_base_uuid: string;
  data: IGenAiDataSourceRequest;
}

export type AddKnowledgeBaseDataSourceResponse = IResponse<IAddKnowledgeBaseDataSourceApiResponse>;

export const addKnowledgeBaseDataSource = ({ httpClient }: IContext) => (
  { knowledge_base_uuid, data }: IAddKnowledgeBaseDataSourceApiRequest,
): Promise<Readonly<AddKnowledgeBaseDataSourceResponse>> => {
  const url = `/gen-ai/knowledge_bases/${knowledge_base_uuid}/data_sources`;
  return httpClient.post<IAddKnowledgeBaseDataSourceApiResponse>(url, data);
}; 