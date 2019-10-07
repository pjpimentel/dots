import { AxiosInstance } from 'axios';

export interface IListActionApiResponse extends IListResponse {
  actions: IAction[];
}

export type ListActionsResponse = IResponse<IListActionApiResponse>;

export const listActions = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  page = 1,
  per_page = 25,
}: IListRequest): Promise<Readonly<ListActionsResponse>> => {
  const path = '/actions';
  const queryParams = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListActionApiResponse>(url, {params: queryParams});
};
