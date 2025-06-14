import { IContext, IListResponse, IResponse, IListRequest } from '../../types';
import { IGenAiIndexingJob } from '..';

export interface IListIndexingJobsApiResponse extends IListResponse {
  indexing_jobs: IGenAiIndexingJob[];
}

export interface IListIndexingJobsApiRequest extends IListRequest {}

export type ListIndexingJobsResponse = IResponse<IListIndexingJobsApiResponse>;

export const listIndexingJobs = ({ httpClient }: IContext) => (
  { page = 1, per_page = 25 }: IListIndexingJobsApiRequest,
): Promise<Readonly<ListIndexingJobsResponse>> => {
  const url = `/gen-ai/indexing_jobs`;
  const params = { page, per_page };
  return httpClient.get<IListIndexingJobsApiResponse>(url, { params });
};
