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
  
  // Make sure we're only sending either spaces_data_source or web_crawler_data_source
  // in the appropriate format
  const requestData = {
    knowledge_base_uuid
  } as any;
  
  if (data.spaces_data_source) {
    requestData.spaces_data_source = data.spaces_data_source;
  } else if (data.web_crawler_data_source) {
    requestData.web_crawler_data_source = data.web_crawler_data_source;
  }
  
  return httpClient.post<IAddKnowledgeBaseDataSourceApiResponse>(url, requestData);
}; 