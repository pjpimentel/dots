import { AxiosInstance } from 'axios';

export interface IGetActionApiRequest {
  id: number;
}

export interface IGetActionApiResponse {
  action: IAction;
}

type GetActionResponse = IResponse<IGetActionApiResponse>;

export const getAction = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
}: IGetActionApiRequest): Promise<Readonly<GetActionResponse>> => {
    const path = `/action/${id}`;
    const url = `${path}`;

    return httpClient.get<IGetActionApiResponse>(url);
  };
