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
  const path = `/domains/${name}`;
  const url = `${path}`;

  return httpClient.delete(url);
};
