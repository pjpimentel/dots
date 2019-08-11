/// list response base interface [used in paginated responses]
interface IListResponse {
  meta: IListMeta;
  links: IListLinks;
}
// items: C[];
// lastPage: number;
// perPage: number;
// total: number;
// currentPage: number;
