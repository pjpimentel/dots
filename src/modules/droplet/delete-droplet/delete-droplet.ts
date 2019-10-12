import { AxiosInstance } from 'axios';

export interface IDeleteDropletApiRequest {
  id: string;
}

export type DeleteDropletResponse = IResponse<void>;

export const deleteDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
}: IDeleteDropletApiRequest): Promise<Readonly<DeleteDropletResponse>> => {
  const path = '/droplets';
  const url = `${path}/${id}`;

  return httpClient.delete(url);
};
