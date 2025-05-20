import { IContext, IResponse } from '../../types';

export interface ICancelIndexingJobApiRequest {
  knowledge_base_uuid: string;
  indexing_job_uuid: string;
}

export type CancelIndexingJobResponse = IResponse<void>;

export const cancelIndexingJob = ({ httpClient }: IContext) => (
  { knowledge_base_uuid, indexing_job_uuid }: ICancelIndexingJobApiRequest,
): Promise<Readonly<CancelIndexingJobResponse>> => {
  const url = `/gen-ai/knowledge_bases/${knowledge_base_uuid}/indexing_jobs/${indexing_job_uuid}`;
  return httpClient.delete<void>(url);
}; 