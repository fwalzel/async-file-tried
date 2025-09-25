import * as path from 'node:path';
import * as fsp from 'node:fs/promises';
import * as fsNormal from 'node:fs';
import { fileURLToPath } from 'node:url';
/****************************************
 * Helpers
 ****************************************/
/**
 *
 * @param filePath
 * @returns {*}
 */
const __resolvePath = (filePath) => {
    return Array.isArray(filePath)
        ? path.join(...filePath)
        : filePath;
};
/** asyncHandler
 *
 * @param func
 * @returns {Promise<*[]>}
 */
const asyncHandler = async (func) => {
    try {
        return [await func(), null];
    }
    catch (error) {
        return [null, error];
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
const access = async (path, mode) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.access(pathResolved, mode));
};
/** appendFile
 *
 * @param path
 * @param data
 * @param options
 * @returns {Promise<*[]>}
 */
const appendFile = async (path, data, options) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.appendFile(pathResolved, data, options));
};
/** chmod
 *
 * @param path
 * @param mode
 * @returns {Promise<*[]>}
 */
const chmod = async (path, mode) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.chmod(pathResolved, mode));
};
/** chown
 *
 * @param path
 * @param uid
 * @param gid
 * @returns {Promise<*[]>}
 */
const chown = async (path, uid, gid) => {
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
const copyFile = async (srcPath, destPath, flags) => {
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
const cp = async (srcPath, destPath, options) => {
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
const lchmod = async (path, mode) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.lchmod(pathResolved, mode));
};
/** lchown
 *
 * @param path
 * @param mode
 * @returns {Promise<*[]>}
 */
const lchown = async (path, uid, gid) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.lchown(pathResolved, uid, gid));
};
/** link
 *
 * @param existingPath
 * @param newPath
 * @returns {Promise<*[]>}
 */
const link = async (existingPath, newPath) => {
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
const lstat = async (path, options) => {
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
const lutimes = async (path, atime, mtime) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.lutimes(pathResolved, atime, mtime));
};
/** mkdir
 *
 * @param path
 * @param options
 * @returns {Promise<*[]>}
 */
const mkdir = async (path, options) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.mkdir(pathResolved, options));
};
/**
 *
 * @param prefix
 * @param options
 * @returns {Promise<*[]>}
 */
const mkdtemp = async (prefix, encoding) => {
    return await asyncHandler(() => fsp.mkdtemp(prefix, encoding));
};
/** open
 *
 * @param path
 * @param flags
 * @param mode
 * @returns {Promise<*[]>}
 */
const open = async (path, flags, mode) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.open(pathResolved, flags, mode));
};
/** opendir
 *
 * @param path
 * @param options
 * @returns {Promise<*[]>}
 */
const opendir = async (path, options) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.opendir(pathResolved, options));
};
/** readFile
 *
 * @param path
 * @param options
 * @returns {Promise<*[]>}
 */
const readFile = async (path, options) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.readFile(pathResolved, options));
};
/** readdir
 *
 * @param path
 * @param options
 * @returns {Promise<*[]>}
 */
const readdir = async (path, options) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.readdir(pathResolved, options));
};
/** readlink
 *
 * @param path
 * @param options
 * @returns {Promise<*[]>}
 */
const readlink = async (path, options) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.readlink(pathResolved, options));
};
/** realpath
 *
 * @param path
 * @param options
 * @returns {Promise<*[]>}
 */
const realpath = async (path, options) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.realpath(pathResolved, options));
};
/** rename
 *
 * @param oldPath
 * @param newPath
 * @returns {Promise<*[]>}
 */
const rename = async (oldPath, newPath) => {
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
const rm = async (path, options) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.rm(pathResolved, options));
};
/** rmdir
 *
 * @param path
 * @param options
 * @returns {Promise<*[]>}
 */
const rmdir = async (path, options) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.rmdir(pathResolved, options));
};
/** stat
 *
 * @param path
 * @param options
 * @returns {Promise<*[]>}
 */
const stat = async (path, options) => {
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
const symlink = async (target, path, type) => {
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
const truncate = async (path, len) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.truncate(pathResolved, len));
};
/** unlink
 *
 * @param path
 * @returns {Promise<*[]>}
 */
const unlink = async (path) => {
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
const utimes = async (path, atime, mtime) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.utimes(pathResolved, atime, mtime));
};
/** watch
 *
 * @param filename
 * @param options
 * @returns {Promise<*[]>}
 */
const watch = async (filename, options) => {
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
const writeFile = async (path, data, options) => {
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
const exists = async (path) => {
    const pathResolved = __resolvePath(path);
    let [res, err] = await access(pathResolved);
    return !err;
};
/**
 *
 * @param dir
 */
const ensureDir = async (dir) => {
    const pathResolved = __resolvePath(dir);
    let [acc, err] = await access(pathResolved);
    if (err) {
        let [r, e] = await mkdir(pathResolved, { recursive: true });
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
const readJson = async (path, options) => {
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
const writeJson = async (path, data, options) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.writeFile(pathResolved, JSON.stringify(data, null, 2), options ?? 'utf8'));
};
/**
 *
 * @param path
 */
const readTextFile = async (path) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.readFile(pathResolved, 'utf8'));
};
/**
 *
 * @param path
 * @param data
 */
const writeTextFile = async (path, data) => {
    const pathResolved = __resolvePath(path);
    return await asyncHandler(() => fsp.writeFile(pathResolved, data, 'utf8'));
};
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
//# sourceMappingURL=index.js.map