import * as modules from './modules';
import * as _utils from './utils';

const createApiClient = _utils.createApiClient({
  modules,
  createContext: _utils.createContext,
});

const utils = {
  createApiClient,
  createContext: _utils.createContext,
};

export {createApiClient, modules, utils};
