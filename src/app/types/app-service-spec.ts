import {
  IAppCors,
  IAppServiceRoute,
  IAppVariableDefinition,
  IGithubSource,
  IGitSource,
  IImageSource,
} from ".";

export interface IAppServiceSpec {
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
    | "basic-xxs"
    | "basic-xs"
    | "basic-s"
    | "basic-m"
    | "professional-xs"
    | "professional-s"
    | "professional-m"
    | "professional-1l"
    | "professional-l"
    | "professional-xl";

  cors?: IAppCors[];

  health_check?: any;

  /**
   * integer <int64> [ 1 .. 65535 ]
   * The internal port on which this service's run command will listen. Default: 8080 If there is not an environment variable with the name PORT, one will be automatically added with its value set to the value of this field.
   */
  http_port?: number;

  /**
   * Array of integers <int64>
   * The ports on which this service will listen for internal traffic.
   */
  internal_ports?: number[];

  /**
   * A list of HTTP routes that should be routed to this component.
   * Array of objects (A criterion for routing HTTP traffic to a component.)
   */
  routes?: IAppServiceRoute[];
}
