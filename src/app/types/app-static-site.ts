import { IAppCors, IAppVariableDefinition, IGithubSource, IGitSource, IImageSource } from ".";

export interface IAppStaticSiteSpec {
  build_command?: string;
  catchall_document?: string;
  cors?: IAppCors[];
  dockerfile_path?: string;
  environment_slug?: string;
  envs?: IAppVariableDefinition[];
  error_document?: string;
  git?: IGitSource;
  github?: IGithubSource;
  gitlab?: IGithubSource;
  image?: IImageSource;
  index_document?: string;
  name: string;
  output_dir?: string;
  run_command?: string;
  source_dir?: string;
}
