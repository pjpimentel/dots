/// list response base interface [used in paginated responses]
export interface IListResponse {
  links?: {
    actions?: {
      href: string;
      id: number;
      rel: string;
    }[];
    pages?: {
      first?: string;
      prev?: string;
      next?: string;
      last?: string;
    }
  };
  meta?: {
    total?: number;
  };
}
