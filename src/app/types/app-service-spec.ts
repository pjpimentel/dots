import {
  IAppCors,
  IAppServiceRoute,
  IAppVariableDefinition,
  IGithubSource,
  IGitSource,
  IImageSource,
} from ".";

export interface IAppServiceSpec {
  build_command?: string;
  cors?: IAppCors[];
  dockerfile_path?: string;
  environment_slug?: string;
  envs?: IAppVariableDefinition[];
  git?: IGitSource;
  github?: IGithubSource;
  gitlab?: IGithubSource;
  health_check?: any;
  http_port?: number;
  image?: IImageSource;
  instance_count?: number;
  instance_size_slug?: string;
  internal_ports?: number[];
  name: string;
  routes?: IAppServiceRoute[];
  run_command?: string;
  source_dir?: string;
}
