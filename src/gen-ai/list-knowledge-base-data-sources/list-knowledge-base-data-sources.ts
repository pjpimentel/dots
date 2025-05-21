import { IContext, IListResponse, IResponse } from '../../types';
import { IGenAiDataSource } from '..';

export interface IListKnowledgeBaseDataSourcesApiResponse extends IListResponse {
  knowledge_base_data_sources: IGenAiDataSource[];
}

export interface IListKnowledgeBaseDataSourcesApiRequest {
  knowledge_base_uuid: string;
  page?: number;
  per_page?: number;
}

export type ListKnowledgeBaseDataSourcesResponse = IResponse<IListKnowledgeBaseDataSourcesApiResponse>;

export const listKnowledgeBaseDataSources = ({ httpClient }: IContext) => (
  { knowledge_base_uuid, page = 1, per_page = 25 }: IListKnowledgeBaseDataSourcesApiRequest,
): Promise<Readonly<ListKnowledgeBaseDataSourcesResponse>> => {
  const url = `/gen-ai/knowledge_bases/${knowledge_base_uuid}/data_sources`;
  const params = { page, per_page };
  return httpClient.get<IListKnowledgeBaseDataSourcesApiResponse>(url, { params });
};
