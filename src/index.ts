import * as modules from './modules';

const createApiClient = modules.common.createApiClient({
  modules,
  createContext: modules.common.createContext,
});

export {
  createApiClient,
  modules,
};
