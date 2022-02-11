import { IResponse, IContext } from '../../types';

export interface IDeleteDomainRecordApiRequest {
  domain_name: string;
  domain_record_id: number;
}

export type DeleteDomainRecordResponse = IResponse<void>;

export const deleteDomainRecord = ({
  httpClient,
}: IContext) => ({
  domain_name,
  domain_record_id,
}: IDeleteDomainRecordApiRequest): Promise<Readonly<DeleteDomainRecordResponse>> => {
  const path = '/domains';
  const url = `${path}/${domain_name}/records/${domain_record_id}`;

  return httpClient.delete(url);
};
