import { IContext, IResponse } from '../../types';
import { IGenAiIndexingJob } from '..';

export interface IGetIndexingJobApiResponse {
  indexing_job: IGenAiIndexingJob;
}

export interface IGetIndexingJobApiRequest {
  knowledge_base_uuid: string;
  indexing_job_uuid: string;
}

export type GetIndexingJobResponse = IResponse<IGetIndexingJobApiResponse>;

export const getIndexingJob = ({ httpClient }: IContext) => (
  { knowledge_base_uuid, indexing_job_uuid }: IGetIndexingJobApiRequest,
): Promise<Readonly<GetIndexingJobResponse>> => {
  const url = `/gen-ai/knowledge_bases/${knowledge_base_uuid}/indexing_jobs/${indexing_job_uuid}`;
  return httpClient.get<IGetIndexingJobApiResponse>(url);
}; 