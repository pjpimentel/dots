import { AxiosInstance } from 'axios';

export interface IGetDomainApiResponse {
  domain: IDomain;
}

export interface IGetDomainApiRequest {
  name: string;
}

export type GetDomainResponse = IResponse<IGetDomainApiResponse>;

export const getDomain = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  name,
}: IGetDomainApiRequest): Promise<Readonly<GetDomainResponse>> => {
  const path = `/domains/${name}`;
  const url = `${path}`;

  return httpClient.get<IGetDomainApiResponse>(url);
};
