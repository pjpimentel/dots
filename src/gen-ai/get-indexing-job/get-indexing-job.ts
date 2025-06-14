import { IContext, IResponse } from '../../types';
import { IGenAiIndexingJob } from '..';

export interface IGetIndexingJobApiResponse {
  indexing_job: IGenAiIndexingJob;
}

export interface IGetIndexingJobApiRequest {
  indexing_job_uuid: string;
}

export type GetIndexingJobResponse = IResponse<IGetIndexingJobApiResponse>;

export const getIndexingJob = ({ httpClient }: IContext) => (
  { indexing_job_uuid }: IGetIndexingJobApiRequest,
): Promise<Readonly<GetIndexingJobResponse>> => {
  const url = `/gen-ai/indexing_jobs/${indexing_job_uuid}`;
  return httpClient.get<IGetIndexingJobApiResponse>(url);
};
