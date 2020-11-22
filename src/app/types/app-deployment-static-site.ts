import { IGitSource, IGithubSource, IImageSource, IAppDeploymentEnv, IAppCors } from ".";
import { IAppDeploymentRoute } from "./app-deployment-route";

export interface IAppDeploymentStaticSite {
  build_command: string;
  dockerfile_path: string;
  environment_slug: string;
  envs: IAppDeploymentEnv[]
  git: IGitSource;
  github: IGithubSource;
  image: IImageSource;
  instance_count: number;
  instance_size_slug: string;
  name: string;
  run_command: string;
  source_dir: string;
  output_dir: string;
  index_document: string;
  error_document: string;
  routes: IAppDeploymentRoute[];
  cors: IAppCors;
}
