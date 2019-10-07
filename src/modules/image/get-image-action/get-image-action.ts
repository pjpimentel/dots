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
  const path = `/images/${id}/actions/${action_id}`;
  const url = `${path}`;

  return httpClient.get<IGetImageActionApiResponse>(url);
};
