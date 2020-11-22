import { IContext } from ".";

/// Test Context
export interface ITestContext {
  successContext: IContext;
  erroredContext: IContext;
}
