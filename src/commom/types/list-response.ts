import { IListMeta, IListLinks } from ".";

/// list response base interface [used in paginated responses]
export interface IListResponse {
  meta: IListMeta;
  links: IListLinks;
}
// items: C[];
// lastPage: number;
// per_page: number;
// total: number;
// currentPage: number;
