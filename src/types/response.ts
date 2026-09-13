/// custom response
export interface IResponse<T> {
  data: T;
  status: number;
  headers: object;
  request?: any;
}
