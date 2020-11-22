import { IProjectResourceLink, ProjectResourceStatus } from '.';

export interface IProjectResource {
  urn: string;
  assigned_at: string;
  links: IProjectResourceLink;
  status: ProjectResourceStatus;
}
