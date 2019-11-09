import { IResponse, IContext } from '../../../types';
import { IDomainRecord } from '..';

export interface ICreateDomainRecordApiResponse {
  domain_record: IDomainRecord;
}

export interface ICreateDomainRecordApiRequest extends Partial<IDomainRecord>{
  domain_name: string;
}

export type CreateDomainRecordResponse = IResponse<ICreateDomainRecordApiResponse>;

export const createDomainRecord = ({
  httpClient,
}: IContext) => ({
  domain_name,
  data,
  flags,
  name,
  port,
  priority,
  tag,
  ttl,
  type,
  weight,
}: ICreateDomainRecordApiRequest): Promise<Readonly<CreateDomainRecordResponse>> => {
  const path = '/domains';
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
  const url = `${path}/${domain_name}/records`;

  return httpClient.post<ICreateDomainRecordApiResponse>(url, body);
};
