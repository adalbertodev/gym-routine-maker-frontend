import { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.ts'],
  transformIgnorePatterns: [],
  moduleDirectories: ['node_modules', 'tests/__utils__']
};

export default config;