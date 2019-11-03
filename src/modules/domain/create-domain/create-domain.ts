import { IResponse, IContext } from '../../../types';
import { IDomain } from '..';

export interface ICreateDomainApiResponse {
  domain: IDomain;
}

export interface ICreateDomainApiRequest {
  ip_address?: string;
  name: string;
}

export type CreateDomainResponse = IResponse<ICreateDomainApiResponse>;

export const createDomain = ({
  httpClient,
}: IContext) => ({
  ip_address,
  name,
}: ICreateDomainApiRequest): Promise<Readonly<CreateDomainResponse>> => {
  const path = '/domains';
  const body = {
    ip_address,
    name,
  };
  const url = `${path}`;

  return httpClient.post<ICreateDomainApiResponse>(url, body);
};
