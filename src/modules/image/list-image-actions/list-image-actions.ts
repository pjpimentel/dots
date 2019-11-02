import { AxiosInstance } from 'axios';

export interface IListImageActionsApiResponse extends IListResponse {
  actions: IAction[];
}

export interface IListImageActionsApiRequest extends IListRequest {
  image_id: number;
}

export type ListImageActionsResponse = IResponse<IListImageActionsApiResponse>;

export const listImageActions = ({
  httpClient,
}: IContext<AxiosInstance>) => ({
  page = 1,
  per_page = 25,
  image_id,
}: IListImageActionsApiRequest): Promise<Readonly<ListImageActionsResponse>> => {
  const path = '/images';
  const queryParams = {page, per_page};
  const url = `${path}/${image_id}/actions`;

  return httpClient.get<IListImageActionsApiResponse>(url, {params: queryParams});
};
