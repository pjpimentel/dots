import { IResponse, IContext, IListResponse, IListRequest } from '../../types';
import { IAction } from '../../action';

export interface IListVolumeActionsApiResponse extends IListResponse {
  actions: IAction[];
}

export interface IListVolumeActionsApiRequest extends IListRequest {
  volume_id: string;
}

export type ListVolumeActionssResponse = IResponse<IListVolumeActionsApiResponse>;

export const listVolumeActions = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
  volume_id,
}: IListVolumeActionsApiRequest): Promise<Readonly<ListVolumeActionssResponse>> => {
  const url = `/volumes/${volume_id}/actions`;
  const query_params = {page, per_page};

  return httpClient.get<IListVolumeActionsApiResponse>(url, {params: query_params});
};
