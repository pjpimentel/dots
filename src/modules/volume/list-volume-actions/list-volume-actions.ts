import { AxiosInstance } from 'axios';

export interface IListVolumeActionsApiResponse extends IListResponse {
  actions: IAction[];
}

export interface IListVolumeActionsApiRequest extends IListRequest {
  id: string;
}

export type ListVolumeActionssResponse = IResponse<IListVolumeActionsApiResponse>;

export const listVolumeActions = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  id,
  page = 1,
  per_page = 25,
}: IListVolumeActionsApiRequest): Promise<Readonly<ListVolumeActionssResponse>> => {
  const path = `/volumes/${id}/actions`;
  const queryParams = {page, per_page};
  const url = `${path}`;

  return httpClient.get<IListVolumeActionsApiResponse>(url, {params: queryParams});
};
