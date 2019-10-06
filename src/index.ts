import * as modules from './modules';
import * as _utils from './utils';

const utils = {
  createApiClient: _utils.createApiClient({
    modules,
    createContext: _utils.createContext,
  }),
  createContext: _utils.createContext,
};

export {modules, utils};
