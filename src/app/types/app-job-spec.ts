export interface IAppJobSpec {
  /**
   * The name. Must be unique across all components within the same app.
   * [ 2 .. 32 ] characters ^[a-z][a-z0-9-]{0,30}[a-z0-9]$
   */
  name: string;

  git?: IGitSource;

  github?: IGithubSource;

  gitlab?: IGithubSource;

  image?: IImageSource;

  /**
   * The path to the Dockerfile relative to the root of the repo. If set, it will be used to build this component. Otherwise, App Platform will attempt to build it using buildpacks.
   */
  dockerfile_path?: string;

  /**
   * An optional build command to run while building this component from source.
   */
  build_command?: string;

  /**
   * An optional run command to override the component's default.
   */
  run_command?: string;

  /**
   * An optional path to the working directory to use for the build. For Dockerfile builds, this will be used as the build context. Must be relative to the root of the repo.
   */
  source_dir?: string;

  /**
   * A list of environment variables made available to the component.
   */
  envs?: IAppVariableDefinition[];

  /**
   * An environment slug describing the type of this app. For a full list, please refer to the product documentation.
   */
  environment_slug?: string;

  /**
   * The amount of instances that this component should be scaled to. Default: 1
   */
  instance_count?: number;

  /**
   * Default: "basic-xxs"
   * Enum: "basic-xxs" "basic-xs" "basic-s" "basic-m" "professional-xs" "professional-s" "professional-m" "professional-1l" "professional-l" "professional-xl"
   * The instance size to use for this component. Default: basic-xxs
   */
  instance_size_slug?:
  | 'basic-xxs'
  | 'basic-xs'
  | 'basic-s'
  | 'basic-m'
  | 'professional-xs'
  | 'professional-s'
  | 'professional-m'
  | 'professional-1l'
  | 'professional-l'
  | 'professional-xl';

  /**
   * Default: "UNSPECIFIED"
   * Enum: "UNSPECIFIED" "PRE_DEPLOY" "POST_DEPLOY" "FAILED_DEPLOY"
   * UNSPECIFIED: Default job type, will auto-complete to POST_DEPLOY kind.
   * PRE_DEPLOY: Indicates a job that runs before an app deployment.
   * POST_DEPLOY: Indicates a job that runs after an app deployment.
   * FAILED_DEPLOY: Indicates a job that runs after a component fails to deploy.
   */
  kind?: 'UNSPECIFIED' | 'PRE_DEPLOY' | 'POST_DEPLOY' | 'FAILED_DEPLOY';
}