import { IContext, IResponse } from '../../types';
import { IGenAiIndexingJob } from '..';

export interface ICreateIndexingJobApiResponse {
  indexing_job: IGenAiIndexingJob;
}

export interface ICreateIndexingJobApiRequest {
  knowledge_base_uuid: string;
}

export type CreateIndexingJobResponse = IResponse<ICreateIndexingJobApiResponse>;

export const createIndexingJob = ({ httpClient }: IContext) => (
  { knowledge_base_uuid }: ICreateIndexingJobApiRequest,
): Promise<Readonly<CreateIndexingJobResponse>> => {
  const url = `/gen-ai/knowledge_bases/${knowledge_base_uuid}/indexing_jobs`;
  return httpClient.post<ICreateIndexingJobApiResponse>(url);
}; 