import { AxiosInstance } from 'axios';

export interface IUpdateDomainRecordApiResponse {
  domain_record: IDomainRecord;
}

export interface IUpdateDomainRecordApiRequest extends Partial<IDomainRecord>{
  domain_name: string;
  domain_record_id: number;
}

export type UpdateDomainRecordResponse = IResponse<IUpdateDomainRecordApiResponse>;

export const updateDomainRecord = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  data,
  domain_name,
  domain_record_id,
  flags,
  name,
  port,
  priority,
  tag,
  ttl,
  type,
  weight,
}: IUpdateDomainRecordApiRequest): Promise<Readonly<UpdateDomainRecordResponse>> => {
  const path = `/domains/${domain_name}/records/${domain_record_id}`;
  const body = {
    data,
    flags,
    name,
    port,
    priority,
    tag,
    ttl,
    type,
    weight,
  };
  const url = `${path}`;

  return httpClient.post<IUpdateDomainRecordApiResponse>(url, body);
};