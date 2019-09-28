import { AxiosInstance } from 'axios';

export interface IGetImageActionApiRequest {
  id: number;
  actionId: number;
}

export interface IGetImageActionApiResponse {
  action: IAction;
}

type GetImageActionResponse = IResponse<IGetImageActionApiResponse>;

export const getImageAction = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
  actionId,
}: IGetImageActionApiRequest): Promise<Readonly<GetImageActionResponse>> => {
  const path = `/images/${id}/actions/${actionId}`;
  const url = `${path}`;

  return httpClient.get<IGetImageActionApiResponse>(url);
};
