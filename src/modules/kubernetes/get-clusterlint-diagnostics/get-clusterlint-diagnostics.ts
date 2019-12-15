import { IResponse, IContext } from '../../../types';

export interface IClusterlintDiagnosticsObj {
  kind: string;
  name: string;
  namespace: string;
}

export interface IClusterlintDiagnostics {
  check_name: string;
  severity: string;
  message: string;
  object: IClusterlintDiagnosticsObj;
}

export interface IGetClusterlintDiagnosticsApiResponse {
  run_id: string;
  requested_at: string;
  completed_at: string;
  diagnostics: IClusterlintDiagnostics[];
}

export interface IGetClusterlintDiagnosticsApiRequest {
  kubernetes_cluster_id: string;
}

export type GetClusterlintDiagnosticsResponse = IResponse<IGetClusterlintDiagnosticsApiResponse>;

export const getClusterlintDiagnostics = ({
  httpClient,
}: IContext) => ({
  kubernetes_cluster_id,
}: IGetClusterlintDiagnosticsApiRequest): Promise<Readonly<GetClusterlintDiagnosticsResponse>> => {
  const path = '/kubernetes/clusters';
  const url = `${path}/${kubernetes_cluster_id}/clusterlint`;

  return httpClient.get<IGetClusterlintDiagnosticsApiResponse>(url);
};
