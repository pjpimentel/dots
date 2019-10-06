import * as modules from './modules';
import * as utils from './utils';

export const dotsWrapper = {
  modules,
  utils: {
    ...utils,
    createApiClient: utils.createApiClient({
      modules,
      createContext: utils.createContext,
    }),
  },
};