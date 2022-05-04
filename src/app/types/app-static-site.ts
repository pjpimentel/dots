

export interface IAppStaticSiteSpec {
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
   * The name of the index document to use when serving this static site. Default: index.html
   * Default: "index.html"
   */
  index_document?: string;

  /**
   * The name of the error document to use when serving this static site. Default: 404.html. If no such file exists within the built assets, App Platform will supply one.
   * Default: "404.html"
   */
  error_document?: string;

  /**
   * The name of the document to use as the fallback for any requests to documents that are not found when serving this static site. Only 1 of catchall_document or error_document can be set.
   */
  catchall_document?: string;

  /**
   * An optional path to where the built assets will be located, relative to the build context. If not set, App Platform will automatically scan for these directory names: _static, dist, public, build.
   */
  output_dir?: string;

  /**
   * Array of objects (A criterion for routing HTTP traffic to a component.)
   * A list of HTTP routes that should be routed to this component.
   */
  cors?: IAppCors[];
}