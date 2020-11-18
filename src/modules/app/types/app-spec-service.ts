import { IGithubSpec, IAppServiceRoute } from ".";

export interface IAppSpecService {
  environment_slug: string;
  github: IGithubSpec;
  instance_count: number;
  instance_size_slug: string;
  name: string;
  routes: IAppServiceRoute[];
  run_command: string;
}
