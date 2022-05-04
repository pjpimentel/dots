export interface IAppVariableDefinition {
  /**
   * The variable name
   * string^[_A-Za-z][_A-Za-z0-9]*$
   */
  key: string;

  /**
   * Default: "RUN_AND_BUILD_TIME"
   * Enum: "UNSET" "RUN_TIME" "BUILD_TIME" "RUN_AND_BUILD_TIME"
   * RUN_TIME: Made available only at run-time
   * BUILD_TIME: Made available only at build-time
   * RUN_AND_BUILD_TIME: Made available at both build and run-time
   */
  scope?: 'UNSET' | 'RUN_TIME' | 'BUILD_TIME' | 'RUN_AND_BUILD_TIME';

  /**
   * Default: "GENERAL"
   * Enum: "GENERAL" "SECRET"
   * GENERAL: A plain-text environment variable
   * SECRET: A secret encrypted environment variable
   */
  type?: 'GENERAL' | 'SECRET';

  /**
   * The value. If the type is SECRET, the value will be encrypted on first submission. On following submissions, the encrypted value should be used.
   */
  value?: string;
}