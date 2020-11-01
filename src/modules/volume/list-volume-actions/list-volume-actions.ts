import { IResponse, IContext, IListResponse, IListRequest } from '../../../types';
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
  const path = '/volumes';
  const queryParams = {page, per_page};
  const url = `${path}/${volume_id}/actions`;

  return httpClient.get<IListVolumeActionsApiResponse>(url, {params: queryParams});
};
