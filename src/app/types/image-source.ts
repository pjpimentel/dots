export interface IImageSource {
  registry_type: string;
  registry: string;
  repository: string;
  tag: string;
  registry_credentials?: string;
  digest?: string;
  deploy_on_push?: {
    enabled?: boolean;
  };
}
