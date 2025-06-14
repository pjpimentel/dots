import { IContext, IResponse } from '../../types';

export interface ICancelIndexingJobApiRequest {
  indexing_job_uuid: string;
}

export type CancelIndexingJobResponse = IResponse<void>;

export const cancelIndexingJob = ({ httpClient }: IContext) => (
  { indexing_job_uuid }: ICancelIndexingJobApiRequest,
): Promise<Readonly<CancelIndexingJobResponse>> => {
  const url = `/gen-ai/indexing_jobs/${indexing_job_uuid}/cancel`;
  return httpClient.put<void>(url);
};
