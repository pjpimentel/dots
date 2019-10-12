import { AxiosInstance } from 'axios';

export interface IDeleteDomainRecordApiRequest {
  domain_name: string;
  domain_record_id: number;
}

export type DeleteDomainRecordResponse = IResponse<void>;

export const deleteDomainRecord = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  domain_name,
  domain_record_id,
}: IDeleteDomainRecordApiRequest): Promise<Readonly<DeleteDomainRecordResponse>> => {
  const path = `/domains/${domain_name}/records/${domain_record_id}`;
  const url = `${path}`;

  return httpClient.delete(url);
};
