import { IContext, IListResponse, IResponse } from '../../types';
import { IGenAiIndexingJob } from '..';

export interface IListIndexingJobsApiResponse extends IListResponse {
  indexing_jobs: IGenAiIndexingJob[];
}

export interface IListIndexingJobsApiRequest {
  knowledge_base_uuid: string;
  page?: number;
  per_page?: number;
}

export type ListIndexingJobsResponse = IResponse<IListIndexingJobsApiResponse>;

export const listIndexingJobs = ({ httpClient }: IContext) => (
  { knowledge_base_uuid, page = 1, per_page = 25 }: IListIndexingJobsApiRequest,
): Promise<Readonly<ListIndexingJobsResponse>> => {
  const url = `/gen-ai/knowledge_bases/${knowledge_base_uuid}/indexing_jobs`;
  const params = { page, per_page };
  return httpClient.get<IListIndexingJobsApiResponse>(url, { params });
};
