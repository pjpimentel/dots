export interface IGithubSource {
  branch: string;
  deploy_on_push?: boolean;
  repo: string;
}
