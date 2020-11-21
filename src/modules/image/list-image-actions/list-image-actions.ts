import { IResponse, IContext, IListResponse, IListRequest } from '../../../types';
import { IAction } from '../../action';

export interface IListImageActionsApiResponse extends IListResponse {
  actions: IAction[];
}

export interface IListImageActionsApiRequest extends IListRequest {
  image_id: number;
}

export type ListImageActionsResponse = IResponse<IListImageActionsApiResponse>;

export const listImageActions = ({
  httpClient,
}: IContext) => ({
  page = 1,
  per_page = 25,
  image_id,
}: IListImageActionsApiRequest): Promise<Readonly<ListImageActionsResponse>> => {
  const path = '/images';
  const query_params = {page, per_page};
  const url = `${path}/${image_id}/actions`;

  return httpClient.get<IListImageActionsApiResponse>(url, {params: query_params});
};
