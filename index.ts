import * as path from 'node:path';
import * as fsp from 'node:fs/promises';
import * as fsNormal from 'node:fs';
import { fileURLToPath } from 'node:url';
import {CopyOptions} from "node:fs";

/****************************************
 * Helpers
 ****************************************/

/**
 *
 * @param filePath
 * @returns {*}
 */
const __resolvePath = (filePath: string|Array<string>) => {
  return Array.isArray(filePath)
    ? path.join(...filePath)
    : filePath
};

/** asyncHandler
 *
 * @param func
 * @returns {Promise<*[]>}
 */
const asyncHandler = async (func: Function) => {
  try {
    return [await func(), null]
  }
  catch (error) {
    return [null, error]
  }
};


/****************************************
 * fs interface
 ****************************************/

/** access
 *
 * @param path
 * @param mode
 * @returns {Promise<*[]>}
 */
const access = async (path: string|Array<string>, mode?: number|string) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.access(pathResolved, <any>mode));
};

/** appendFile
 *
 * @param path
 * @param data
 * @param options
 * @returns {Promise<*[]>}
 */
const appendFile = async (path: string|Array<string>, data: any, options?: { encoding?: Encoding; mode?: number|string; flag?: Flags; }) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.appendFile(pathResolved, data, options));
};

/** chmod
 *
 * @param path
 * @param mode
 * @returns {Promise<*[]>}
 */
const chmod = async (path: string|Array<string>, mode?: number|string) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.chmod(pathResolved, <any>mode));
};

/** chown
 *
 * @param path
 * @param uid
 * @param gid
 * @returns {Promise<*[]>}
 */
const chown = async (path: string|Array<string>, uid: number, gid: number) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.chown(pathResolved, uid, gid));
};

/** copyFile
 *
 * @param srcPath
 * @param destPath
 * @param flags
 * @returns {Promise<*[]>}
 */
const copyFile = async (srcPath: string|Array<string>, destPath: string|Array<string>, flags?: number) => {
  const srcPathResolved = __resolvePath(srcPath);
  const destPathResolved = __resolvePath(destPath);
  return await asyncHandler(() => fsp.copyFile(srcPathResolved, destPathResolved, flags));
};

/** cp
 *
 * @param srcPath
 * @param destPath
 * @returns {Promise<*[]>}
 */
const cp = async (srcPath: string|Array<string>, destPath: string|Array<string>, options?: CopyOptions) => {
  const srcPathResolved = __resolvePath(srcPath);
  const destPathResolved = __resolvePath(destPath);
  return await asyncHandler(() => fsp.cp(srcPathResolved, destPathResolved, options));
};

/** lchmod
 *
 * @param path
 * @param mode
 * @returns {Promise<*[]>}
 */
const lchmod = async (path: string|Array<string>, mode?: number|string) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.lchmod(pathResolved, <any>mode));
};

/** lchown
 *
 * @param path
 * @param mode
 * @returns {Promise<*[]>}
 */
const lchown = async (path: string|Array<string>, uid: number, gid: number) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.lchown(pathResolved, uid, gid));
};

/** link
 *
 * @param existingPath
 * @param newPath
 * @returns {Promise<*[]>}
 */
const link = async (existingPath: string|Array<string>, newPath: string|Array<string>) => {
  const existingPathResolved = __resolvePath(existingPath);
  const newPathResolved = __resolvePath(newPath);
  return await asyncHandler(() => fsp.link(existingPathResolved, newPathResolved));
};

/** lstat
 *
 * @param path
 * @param options
 * @returns {Promise<*[]>}
 */
const lstat = async (path: string|Array<string>, options?: object) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.lstat(pathResolved, options));
};

/** lutimes
 *
 * @param path
 * @param atime
 * @param mtime
 * @returns {Promise<*[]>}
 */
const lutimes = async (path: string|Array<string>, atime: Date|number, mtime: Date|number) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.lutimes(pathResolved, atime, mtime));
};

/** mkdir
 *
 * @param path
 * @param options
 * @returns {Promise<*[]>}
 */
const mkdir = async (path: string|Array<string>, options?: number|string|object) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.mkdir(pathResolved, options));
};

/**
 *
 * @param prefix
 * @param options
 * @returns {Promise<*[]>}
 */
const mkdtemp = async (prefix: string, encoding?: Encoding) => {
  return await asyncHandler(() => fsp.mkdtemp(prefix, encoding));
};

/** open
 *
 * @param path
 * @param flags
 * @param mode
 * @returns {Promise<*[]>}
 */
const open = async (path: string|Array<string>, flags?: Flags, mode?: number|string) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.open(pathResolved, flags, <any>mode));
};

/** opendir
 *
 * @param path
 * @param options
 * @returns {Promise<*[]>}
 */
const opendir = async (path: string|Array<string>, options?: object) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.opendir(pathResolved, options));
};

/** readFile
 *
 * @param path
 * @param options
 * @returns {Promise<*[]>}
 */
const readFile = async (path: string|Array<string>, options?: Encoding) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.readFile(pathResolved, options));
};

/** readdir
 *
 * @param path
 * @param options
 * @returns {Promise<*[]>}
 */
const readdir = async (path: string|Array<string>, options?: object) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.readdir(pathResolved, options));
};

/** readlink
 *
 * @param path
 * @param options
 * @returns {Promise<*[]>}
 */
const readlink = async (path: string|Array<string>, options?: object|string) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.readlink(pathResolved, options));
};

/** realpath
 *
 * @param path
 * @param options
 * @returns {Promise<*[]>}
 */
const realpath = async (path: string|Array<string>, options?: object) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.realpath(pathResolved, options));
};

/** rename
 *
 * @param oldPath
 * @param newPath
 * @returns {Promise<*[]>}
 */
const rename = async (oldPath: string|Array<string>, newPath: string|Array<string>) => {
  const oldPathResolved = __resolvePath(oldPath);
  const newPathResolved = __resolvePath(newPath);
  return await asyncHandler(() => fsp.rename(oldPathResolved, newPathResolved));
};

/** rm
 *
 * @param path
 * @param options
 * @returns {Promise<*[]>}
 */
const rm = async (path: string|Array<string>, options?: object) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.rm(pathResolved, options));
};

/** rmdir
 *
 * @param path
 * @param options
 * @returns {Promise<*[]>}
 */
const rmdir = async (path: string|Array<string>, options?: object) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.rmdir(pathResolved, options));
};

/** stat
 *
 * @param path
 * @param options
 * @returns {Promise<*[]>}
 */
const stat = async (path: string|Array<string>, options?: object) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.stat(pathResolved, options));
};


/** symlink
 *
 * @param target
 * @param path
 * @param type
 * @returns {Promise<*[]>}
 */
const symlink = async (target: string|Array<string>, path: string|Array<string>, type?: string) => {
  const targetResolved = __resolvePath(target);
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.symlink(targetResolved, pathResolved, type));
};

/** truncate
 *
 * @param path
 * @param len
 * @returns {Promise<*[]>}
 */
const truncate = async (path: string|Array<string>, len:number) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.truncate(pathResolved, len));
};

/** unlink
 *
 * @param path
 * @returns {Promise<*[]>}
 */
const unlink = async (path: string|Array<string>) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.unlink(pathResolved));
};

/** utimes
 *
 * @param path
 * @param atime
 * @param mtime
 * @returns {Promise<*[]>}
 */
const utimes = async (path: string|Array<string>, atime: number|string|Date, mtime: number|string|Date) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.utimes(pathResolved, atime, mtime));
};

/** watch
 *
 * @param filename
 * @param options
 * @returns {Promise<*[]>}
 */
const watch = async (filename: string|Array<string>, options?: BufferEncoding | "buffer") => {
  const filenameResolved = __resolvePath(filename);
  return await asyncHandler(() => fsp.watch(filenameResolved, options));
};

/** writeFile
 *
 * @param path
 * @param data
 * @param options
 * @returns {Promise<*[]>}
 */
const writeFile = async (path: string|Array<string>, data: any, options?: Encoding) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.writeFile(pathResolved, data, options));
};


/****************************************
 * Constants
 ****************************************/

/**
 * fs.constants
 */
const constants = fsNormal.constants;

/**
 * __dirname in Node.js when using ES6 modules
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * __filename in Node.js when using ES6 modules
 */
const __filename = fileURLToPath(import.meta.url);


/****************************************
 * Bonus Functions
 ****************************************/

/**
 *
 * @param path
 */
const exists = async (path: string|Array<string>) => {
  const pathResolved = __resolvePath(path);
  let [res, err] = await access(pathResolved);
  return !err
}

/**
 *
 * @param dir
 */
const ensureDir = async (dir: string|Array<string>)=> {
  const pathResolved = __resolvePath(dir);
  let [acc, err] = await access(pathResolved);
  if (err) {
    let [r,e] = await mkdir(pathResolved, { recursive: true })
    if (e) {
      console.error(e);
      return false;
    }
  }
  return true;
};

/**
 *
 * @param path
 * @param options
 * @returns {Promise<any>}
 */
const readJson = async (path: string|Array<string>, options?: Encoding) => {
  const pathResolved = __resolvePath(path);
  let [res, err] = await asyncHandler(() => fsp.readFile(pathResolved, options ?? 'utf8'));
  return res
    ? [JSON.parse(res), null]
    : [null, err];
};

/**
 *
 * @param path
 * @param data
 * @param options
 * @returns {Promise<*[]>}
 */
const writeJson = async (path: string|Array<string>, data: Object, options?: Encoding)=> {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.writeFile(pathResolved, JSON.stringify(data, null, 2), options ?? 'utf8'));
};

/**
 *
 * @param path
 */
const readTextFile = async (path: string|Array<string>) => {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.readFile(pathResolved, 'utf8'));
};

/**
 *
 * @param path
 * @param data
 */
const writeTextFile = async (path: string|Array<string>, data: string)=> {
  const pathResolved = __resolvePath(path);
  return await asyncHandler(() => fsp.writeFile(pathResolved, data, 'utf8'));
};




/****************************************
 * Export
 ****************************************/

export type Encoding = 'ascii'|'base64'|'binary'|'hex'|'ucs2'|'utf16le'|'utf8';
export type Flags = 'r'|'r+'|'rs'|'rs+'|'w'|'wx'|'w+'|'wx+'|'a'|'ax'|'a+'|'ax+';

const fs = {
  access,
  appendFile,
  chmod,
  chown,
  copyFile,
  cp,
  lchmod,
  lchown,
  link,
  lstat,
  lutimes,
  mkdir,
  mkdtemp,
  open,
  opendir,
  readFile,
  readdir,
  readlink,
  realpath,
  rename,
  rm,
  rmdir,
  stat,
  symlink,
  truncate,
  unlink,
  utimes,
  watch,
  writeFile,
  constants,
  __dirname,
  __filename,
  asyncHandler,
  exists,
  ensureDir,
  readJson,
  writeJson,
  readTextFile,
  writeTextFile,
};

if (process.env.NODE_ENV === 'TEST')
  fs['__resolvePath'] = __resolvePath;

export default fs;
