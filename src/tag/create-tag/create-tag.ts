import { IResponse, IContext } from '../../types';
import { ITag } from '..';

export interface ICreateTagApiResponse {
  tag: ITag;
}

export interface ICreateTagApiRequest {
  name: string;
}

export type CreateTagResponse = IResponse<ICreateTagApiResponse>;

export const createTag = ({
  httpClient,
}: IContext) => ({
  name,
}: ICreateTagApiRequest): Promise<Readonly<CreateTagResponse>> => {
  const path = '/tags';
  const body = {name};
  const url = `${path}`;

  return httpClient.post<ICreateTagApiResponse>(url, body);
};
