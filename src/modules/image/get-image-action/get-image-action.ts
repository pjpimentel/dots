import { AxiosInstance } from 'axios';

export interface IGetImageActionApiRequest {
  id: number;
  action_id: number;
}

export interface IGetImageActionApiResponse {
  action: IAction;
}

export type GetImageActionResponse = IResponse<IGetImageActionApiResponse>;

export const getImageAction = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  id,
  action_id,
}: IGetImageActionApiRequest): Promise<Readonly<GetImageActionResponse>> => {
  const path = '/images';
  const url = `${path}/${id}/actions/${action_id}`;

  return httpClient.get<IGetImageActionApiResponse>(url);
};
