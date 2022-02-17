import { IGitSource, IGithubSource, IImageSource, IAppDeploymentEnv } from ".";

export interface IAppDeploymentWorker {
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
}
