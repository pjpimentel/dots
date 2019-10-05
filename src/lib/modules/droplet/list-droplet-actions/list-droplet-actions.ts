import { AxiosInstance } from 'axios';

export interface IListDropletActionsApiResponse extends IListResponse {
  actions: IAction[];
}

export interface IListDropletActionsApiRequest extends IListRequest {
  id: number;
}

type ListDropletActionsResponse = IResponse<IListDropletActionsApiResponse>;

export const listDropletActions = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
  page = 1,
  per_page = 25,
}: IListDropletActionsApiRequest): Promise<Readonly<ListDropletActionsResponse>> => {
  const path = `/droplets/${id}/actions`;
  const queryParams = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListDropletActionsApiResponse>(url, {
    params: queryParams,
  });
};
