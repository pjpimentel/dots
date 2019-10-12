import { AxiosInstance } from 'axios';

export interface IDeleteDomainApiRequest {
  name: string;
}

export type DeleteDomainResponse = IResponse<void>;

export const deleteDomain = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  name,
}: IDeleteDomainApiRequest): Promise<Readonly<DeleteDomainResponse>> => {
  const path = '/domains';
  const url = `${path}/${name}`;

  return httpClient.delete(url);
};
