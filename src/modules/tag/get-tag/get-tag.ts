import { AxiosInstance } from 'axios';

export interface IGetTagApiResponse {
  tag: ITag;
}

export interface IGetTagApiRequest {
  tag_name: string;
}

export type GetTagResponse = IResponse<IGetTagApiResponse>;

export const getTag = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  tag_name,
}: IGetTagApiRequest): Promise<Readonly<GetTagResponse>> => {
  const path = '/tags';
  const url = `${path}/${tag_name}`;

  return httpClient.get<IGetTagApiResponse>(url);
};
