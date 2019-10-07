import { AxiosInstance } from 'axios';

export interface IDeleteDropletApiRequest {
  id: string;
}

export type DeleteDropletResponse = IResponse<void>;

export const deleteDroplet = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
}: IDeleteDropletApiRequest): Promise<Readonly<DeleteDropletResponse>> => {
  const path = `/droplets/${id}`;
  const url = `${path}`;

  return httpClient.delete(url);
};
