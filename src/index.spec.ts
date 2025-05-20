import {readdirSync, Dirent, readFileSync } from 'fs';
import * as dots from './index';

const MODULES_ROOT = __dirname;
const READ_DIR_OPTIONS = {encoding:null, withFileTypes: true as true};
const KEYS_BLACKLIST = ['types', '_options', 'index.ts', 'README.md', 'common'];

const _IS_KEY_BLACK_LISTED = ({blacklist}: {blacklist: string[]}) => (key: string) => blacklist.includes(key);
const _IS_DIR = ({isBlacklisted}: {isBlacklisted: (v: string) => boolean}) => (dir: Dirent | string) => {
  if (typeof dir === 'string') return !isBlacklisted(dir);
  return dir.isDirectory() && !isBlacklisted(dir.name);
}
const _GET_NAME = () => (dir: Dirent | string) => {
  if (typeof dir === 'string') return dir;
  return dir.name;
};
const _GET_FULL_PATH = (prefix: string) => (suffix: string) => `${prefix}/${suffix}`;
const _JOIN_AND_CAPITALIZE = () => (value: string) => {
  const splited = value.split('-');

  if (splited.length === 1) return value;

  return splited
    .map((splitedValue, i) => {
      if (i === 0) return splitedValue;

      const [firstChar, ...otherChars] = splitedValue;
      return `${firstChar.toUpperCase()}${otherChars.join('')}`;
    })
    .join('');
};

const isKeyBlacklisted = _IS_KEY_BLACK_LISTED({blacklist: KEYS_BLACKLIST});
const isDir = _IS_DIR({isBlacklisted: isKeyBlacklisted});
const getDirName = _GET_NAME();
const joinAndCapitalize = _JOIN_AND_CAPITALIZE();
const getFullPath = _GET_FULL_PATH(MODULES_ROOT);
const MODULES = readdirSync(MODULES_ROOT, READ_DIR_OPTIONS)
  .filter(isDir)
  .map(getDirName);

describe('dots', () => {
  describe('entrypoint', () => {
    it('should be a fn', () => {
      expect(dots.modules).toBeDefined();
      expect(dots.createApiClient).toBeInstanceOf(Function);
    });
  });
  describe('readme', () => {
    it('should exists', () => {
      MODULES.forEach((_module) => {
        const path = getFullPath(_module);
        const pathContent = readdirSync(path, READ_DIR_OPTIONS);
        const readmeFile = pathContent.find((file) => (file.name || file) === 'README.md');
        const hasReadme = !!readmeFile;
        expect(hasReadme).toBe(true);
      });
    });
    it('should contain all methods', () => {
      MODULES.forEach((_module) => {
        const path = getFullPath(_module);
        const pathContent = readdirSync(path, READ_DIR_OPTIONS);
        const readmeFile = pathContent.find((file) => (file.name || file) === 'README.md');
        const hasReadme = !!readmeFile;
        expect(hasReadme).toBe(true);
        const readmeContent = readFileSync(`${path}/README.md`).toString('utf8');
        const readmeLines = readmeContent.split('\n');
        const readmeTitles = readmeLines.filter(line => line.startsWith('#'));
        const [title, ...subtitles] = readmeTitles.map(title => title.replace(/#/g, '').trim());
        const prettyTitle = joinAndCapitalize(title);
        let prettySubtitles = subtitles.map(joinAndCapitalize);
        
        // Correct the OpenAI naming in the method names
        prettySubtitles = prettySubtitles.map(method => {
          if (method.includes('Openai')) {
            return method.replace('Openai', 'OpenAI');
          }
          return method;
        }).sort();
        
        // @ts-ignore: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type
        const apiReference = dots.modules[prettyTitle as any];
        expect(apiReference).toBeDefined();
        const sortedApiReferenceKeys = Object.keys(apiReference).sort();
        expect(sortedApiReferenceKeys).toStrictEqual(prettySubtitles);
      });
    });
    it('main readme should contain valid links', () => {
      const _base = 'src';
      const mainReadmePath = './README.md';
      const mainReadmeContent = readFileSync(mainReadmePath).toString('utf8');
      const links = MODULES.map((_module) => {
        const path = getFullPath(_module);
        const pathContent = readdirSync(path, READ_DIR_OPTIONS);
        const readmeFile = pathContent.find((file) => (file.name || file) === 'README.md');
        const hasReadme = !!readmeFile;
        expect(hasReadme).toBe(true);
        const readmeContent = readFileSync(`${path}/README.md`).toString('utf8');
        const readmeLines = readmeContent.split('\n');
        const readmeTitles = readmeLines
          .filter(line => line.startsWith('#'))
          .map(title => title.replace(/#/g, '').trim());
        return readmeTitles.map((title) => `${_base}/${_module}/README.md#${title}`);
      }).reduce((list, links) => [...list, ...links], []);
      links.forEach((link) => {
        expect(mainReadmeContent).toContain(link);
      });
    });
  });
});
