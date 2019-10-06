import { AxiosInstance } from 'axios';

export interface IListImageActionsApiResponse extends IListResponse {
  actions: IAction[];
}

export interface IListImageActionsApiRequest extends IListRequest {
  id: number;
}

type ListImageActionsResponse = IResponse<IListImageActionsApiResponse>;

export const listImageActions = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  page = 1,
  per_page = 25,
  id,
}: IListImageActionsApiRequest): Promise<Readonly<ListImageActionsResponse>> => {
  const path = `/images/${id}/actions`;
  const queryParams = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListImageActionsApiResponse>(url, {params: queryParams});
};
