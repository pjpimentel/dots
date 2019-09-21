module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '.mock.ts', 'dist'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '.old', 'dist'],
  verbose: true,
};
