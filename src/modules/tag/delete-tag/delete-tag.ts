import { AxiosInstance } from 'axios';

export interface IDeleteTagApiRequest {
  tag_name: string;
}

export type DeleteTagResponse = IResponse<void>;

export const deleteTag = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  tag_name,
}: IDeleteTagApiRequest): Promise<Readonly<DeleteTagResponse>> => {
  const path = '/certificates';
  const url = `${path}/${tag_name}`;

  return httpClient.delete(url);
};
