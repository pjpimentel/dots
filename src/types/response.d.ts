/// custom response
interface IResponse<T> {
  data: T;
  status: number;
  headers: object; // TODO: tslint:disable-line:no-any
  request?: AxiosRequestConfig; // TODO: tslint:disable-line:no-any
}
