import { IResponse, IContext } from '../../types';
import { IDomain } from '..';

export interface IGetDomainApiResponse {
  domain: IDomain;
}

export interface IGetDomainApiRequest {
  name: string;
}

export type GetDomainResponse = IResponse<IGetDomainApiResponse>;

export const getDomain = ({
  httpClient,
}: IContext) => ({
  name,
}: IGetDomainApiRequest): Promise<Readonly<GetDomainResponse>> => {
  const url = `/domains/${name}`;

  return httpClient.get<IGetDomainApiResponse>(url);
};
