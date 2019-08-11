module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '.mock.ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '.old'],
  verbose: true,
};
