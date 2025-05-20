import { IContext, IResponse } from '../../types';
import { IGenAiIndexedDataSource } from '..';

export interface IListIndexingJobDataSourcesApiResponse {
  indexed_data_sources: IGenAiIndexedDataSource[];
}

export interface IListIndexingJobDataSourcesApiRequest {
  indexing_job_uuid: string;
}

export type ListIndexingJobDataSourcesResponse = IResponse<IListIndexingJobDataSourcesApiResponse>;

export const listIndexingJobDataSources = ({ httpClient }: IContext) => (
  { indexing_job_uuid }: IListIndexingJobDataSourcesApiRequest,
): Promise<Readonly<ListIndexingJobDataSourcesResponse>> => {
  const url = `/gen-ai/indexing_jobs/${indexing_job_uuid}/data_sources`;
  return httpClient.get<IListIndexingJobDataSourcesApiResponse>(url);
}; 