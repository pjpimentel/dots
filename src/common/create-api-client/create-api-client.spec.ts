import {createApiClient} from './create-api-client';
import * as modules from '../../modules';
import {createContext} from '../create-context/create-context';
import {readdirSync, Dirent} from 'fs';

const MODULES_ROOT = __dirname + '/../..';
const READ_DIR_OPTIONS = {encoding:null, withFileTypes: true as const};
const KEYS_BLACKLIST = ['types', '_options', 'index.ts', 'README.md', 'common'];

const _FN_REF = () => true;
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

/// ls src/modules
const _getFolders = (_module: string) => {
  const path = getFullPath(_module);
  return readdirSync(path, READ_DIR_OPTIONS).filter(isDir).map(getDirName);
};
/// {getAccount}, {getAction, listActions}
const _createEndpointsMirror = (folders: string[]) => folders.reduce((endpoints, fn) => {
  const prettyFnName = joinAndCapitalize(fn);
  return {...endpoints, [prettyFnName]: _FN_REF};
}, {});
/// {account: {getAccount}, action: {getAction, listActions}}
const ENDPOINTS = MODULES.reduce((mods, _module) => {
  const folders = _getFolders(_module)
  const prettyModuleName = joinAndCapitalize(_module);

  return {...mods, [prettyModuleName]: _createEndpointsMirror(folders)};
}, {});
const isValidKey = (key: string = '') => key && key[0] !== '_';
const sort_fn = (a: string, b: string) => a.localeCompare(b);

describe('create-api-client', () => {
  it('should be and return a fn', () => {
    expect(typeof createApiClient).toBe('function');
    expect(typeof createApiClient({createContext, modules})).toBe('function');
  });

  it('should create a valid instance', () => {
    const _createApiClient = createApiClient({createContext, modules});
    const endpoint = require('crypto').randomBytes(2);
    const token = require('crypto').randomBytes(2);
    const requestTimeoutInMs = require('crypto').randomBytes(2);
    const client = _createApiClient({
      endpoint,
      requestTimeoutInMs,
      token,
    });

    expect(client).toBeDefined();
    expect(client._options.endpoint).toBe(endpoint);
    expect(client._options.requestTimeoutInMs).toBe(requestTimeoutInMs);

    const createdClientEntries = Object.entries(client).filter(([key]) => isValidKey(key));
    const createdClientKeys = Object.keys(client).filter(isValidKey).sort(sort_fn);
    const ENDPOINTS_KEYS = Object.keys(ENDPOINTS).sort(sort_fn);

    expect(ENDPOINTS_KEYS).toMatchObject(createdClientKeys);

    createdClientEntries.forEach(([key, value]) => {
      const clientMethods = Object.keys(value).sort(sort_fn);
      const listedMethods = Object.keys((ENDPOINTS as any)[key]).sort(sort_fn);
      expect(clientMethods).toMatchObject(listedMethods);
    });
  });
});
