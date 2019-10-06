import { AxiosInstance } from 'axios';

export interface IListVolumesApiResponse extends IListResponse {
  volumes: IVolume[];
}

export interface IListVolumesApiRequest extends IListRequest {
  name?: string;
}

type ListVolumesResponse = IResponse<IListVolumesApiResponse>;

export const listVolumes = ({
  httpClient,
}: IContext<AxiosInstance>) => async ({
  name,
  page = 1,
  per_page = 25,
}: IListVolumesApiRequest): Promise<Readonly<ListVolumesResponse>> => {
  const path = '/volumes';
  const queryParams = {page, per_page};
  const hasNameFilter = typeof name === 'string';

  if (hasNameFilter) Object.assign(queryParams, {name});

  const url = `${path}`;

  return httpClient.get<IListVolumesApiResponse>(url, {params: queryParams});
};
