import * as modules from './modules';

const createApiClient = modules.common.createApiClient({
  modules,
  createContext: modules.common.createContext,
});

const utils = {
  createApiClient,
  createContext: modules.common.createContext,
};

export {
  createApiClient,
  modules,
  utils // retro compatibilty WILL BE REMOVED IN FUTURE VERSIONS
};
