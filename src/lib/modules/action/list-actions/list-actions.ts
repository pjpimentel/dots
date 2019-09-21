import { AxiosInstance } from 'axios';

export interface IListActionApiResponse extends IListResponse {
  actions: IAction[];
}

type ListActionsResponse = IResponse<IListActionApiResponse>;

export const listActions = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  page = 1,
  perPage = 25,
}: IListRequest): Promise<Readonly<ListActionsResponse>> => {
  const path = '/actions';
  const queryParams = {page, per_page: perPage};
  const url = `${path}`;

  return httpClient.get<IListActionApiResponse>(url, {params: queryParams});
};
