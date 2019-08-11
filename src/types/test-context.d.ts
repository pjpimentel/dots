/// Test Context
interface ITestContext<HttpClient> {
  successContext: IContext<HttpClient>;
  erroredContext: IContext<HttpClient>;
}
