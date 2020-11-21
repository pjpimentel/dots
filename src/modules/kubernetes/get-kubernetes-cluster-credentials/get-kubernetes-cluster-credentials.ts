import { IResponse, IContext } from '../../../types';

export interface IGetKubernetesClusterCredentialsApiResponse {
  certificate_authority_data: string;
  client_certificate_data: string;
  client_key_data: string;
  expires_at: string;
  server: string;
  token: string;
}

export interface IGetKubernetesClusterCredentialsApiRequest {
  kubernetes_cluster_id: string;
  expiration_in_seconds?: number;
}

export type GetKubernetesClusterCredentialsResponse = IResponse<IGetKubernetesClusterCredentialsApiResponse>;

export const getKubernetesClusterCredentials = ({
  httpClient,
}: IContext) => ({
  kubernetes_cluster_id,
  expiration_in_seconds,
}: IGetKubernetesClusterCredentialsApiRequest): Promise<Readonly<GetKubernetesClusterCredentialsResponse>> => {
  const path = '/kubernetes/clusters';
  const query_params = {expiry_seconds: expiration_in_seconds};
  const url = `${path}/${kubernetes_cluster_id}/credentials`;

  return httpClient.get<IGetKubernetesClusterCredentialsApiResponse>(url, {params: query_params});
};
