import { IResponse, IContext } from '../../types';

export interface IKubernetesOptionsSize {
  name: string;
  slug: string;
}

export interface IKubernetesOptionsVersion {
  kubernetes_version: string;
  slug: string;
}

export interface IKubernetesOptionsRegion {
  name: string;
  slug: string;
}

export interface IKubernetesOptions {
  regions: IKubernetesOptionsRegion[];
  versions: IKubernetesOptionsVersion[];
  sizes: IKubernetesOptionsSize[];
}

export interface IListAvailableOptionsOfKubernetesApiResponse {
  options: IKubernetesOptions
}

export type ListAvailableOptionsOfKubernetesResponse = IResponse<IListAvailableOptionsOfKubernetesApiResponse>;

export const listAvailableOptionsOfKubernetes = ({
  httpClient,
}: IContext) => (): Promise<Readonly<ListAvailableOptionsOfKubernetesResponse>> => {
  const url = '/kubernetes/options';

  return httpClient.get<IListAvailableOptionsOfKubernetesApiResponse>(url);
};
