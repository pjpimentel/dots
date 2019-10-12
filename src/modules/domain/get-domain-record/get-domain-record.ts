import { AxiosInstance } from 'axios';

export interface IGetDomainRecordApiResponse {
  domain_record: IDomainRecord;
}

export interface IGetDomainRecordApiRequest {
  domain_name: string;
  domain_record_id: number;
}

export type GetDomainRecordResponse = IResponse<IGetDomainRecordApiResponse>;

export const getDomainRecord = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  domain_name,
  domain_record_id,
}: IGetDomainRecordApiRequest): Promise<Readonly<GetDomainRecordResponse>> => {
  const path = `/domains/${domain_name}/records/${domain_record_id}`;
  const url = `${path}`;

  return httpClient.get<IGetDomainRecordApiResponse>(url);
};
