/// Context
interface IContext<HttpClient> {
  endpoint: string;
  httpClient: HttpClient;
  // requestTimeout: number;
  // responseTimeout: number;
  // token: string;
}
