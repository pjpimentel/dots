import * as dots from './index';

describe('dots', () => {
  describe('entrypoint', () => {
    it('should be a fn', () => {
      expect(dots.modules).toBeDefined();
      expect(dots.utils).toBeDefined();
      expect(dots.utils.createApiClient).toBeInstanceOf(Function);
      expect(dots.utils.createContext).toBeInstanceOf(Function);
    });
  });
});
