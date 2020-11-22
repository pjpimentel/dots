/// custom response
export interface IResponse<T> {
  data: T;
  status: number;
  headers: object; // TODO: tslint:disable-line:no-any
  request?: any; // TODO: tslint:disable-line:no-any
}
