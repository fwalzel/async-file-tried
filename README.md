# Async-file-tried

*async-file-tried* is a wrapper around node’s `fs/promises` that abstracts the try-catch block for you.
Write more linear, better readable code by getting a concise response. Dependency free. TypeScript supported.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Node.js Version](https://img.shields.io/badge/Node.js-16.x-green)
[![Build](https://github.com/fwalzel/async-file-tried/actions/workflows/node.js.yml/badge.svg)](https://github.com/fwalzel/async-file-tried/actions/workflows/node.js.yml/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/fwalzel/async-file-tried/badge.svg?branch=main)](https://coveralls.io/github/fwalzel/async-file-tried?branch=main)
[![Known Vulnerabilities](https://snyk.io/test/github/fwalzel/async-file-tried/badge.svg)](https://snyk.io/test/github/fwalzel/async-file-tried/badge.svg)


## Install

```sh
npm install async-file-tried
```

Import:

```javascript
import fs from 'async-file-tried';
```

## Usage

Usually we do not want to make calls against the file system without a proper error handling. But the try-catch block is somewhat unelegant because it moves code blocks in the bracket sub-space and thus disturbs the linearity of our programming. *async-file-tried* returns a tuple with either the response or the error from a fs call and simplifies error handling.

You can write now:

```javascript
let [res, err] = await fs.readdir('.');
if (err) console.error(err);
else console.log(res);
```

... instead of:

```javascript
try {
    let res = await fs.readdir('.');
    console.log(res);
}
catch (err) {
    console.error(err);
}
```

## Extra: joined paths

*async-file-tried* also has an in-built `path.join()` so that you can alternatively pass the path argument as array of sub-elements.

You can write i.e.:

```javascript
let [res, err] = await fs.appendFile(
  ['fs.__dirname', '..' , 'myfolder', `img_${i}.txt`], 
  'my text');
```

... and the path string will be composed automatically.

## Public Functions (FS Function List)

### [fs.access](https://nodejs.org/api/fs.html#fspromisesaccesspath-mode)

Tests a user's permissions for the file or directory specified by `path`.

Typescript implementation: 
```typescript
async (path: string|Array<string>, mode?: number|string)
```

Usage example: 
```javascript
let [res, err] = await fs.access('file.txt', fs.constants.R_OK);
```

---

### [fs.appendFile](https://nodejs.org/api/fs.html#fspromisesappendfilepath-data-options)

Asynchronously appends data to a file, creating the file if it does not exist.

Typescript implementation:
```typescript
async (path: string|Array<string>, data: any, options?: { encoding?: Encoding; mode?: number|string; flag?: Flags; })
```

Usage example:
```javascript
let [res, err] = await fs.appendFile('file.txt', 'foo');
```

---

### [fs.chmod](https://nodejs.org/api/fs.html#filehandlechmodmode)

Changes the permissions of a file or directory.

Typescript implementation:
```typescript
async (path: string|Array<string>, mode?: number|string)
```

Usage example:
```javascript
let [res, err] = await fs.chmod('file.txt', '755');
```

---

### [fs.chown](https://nodejs.org/api/fs.html#filehandlechownuid-gid)

Changes the ownership of a file by setting the user ID and group ID.

Typescript implementation:
```typescript
async (path: string|Array<string>, uid: number, gid: number)
```

Usage example:
```javascript
let [res, err] = await fs.chown('file.txt', 1541, 999);
```

---

### [fs.copyFile](https://nodejs.org/api/fs.html#fspromisescopyfilesrc-dest-mode)

Copies a file from one location to another.

Typescript implementation:
```typescript
async (srcPath: string|Array<string>, destPath: string|Array<string>, flags?: number)
```

Usage example:
```javascript
let [res, err] = await fs.copyFile('file.txt', 'file-copy.txt');
```

---

### [fs.cp](https://nodejs.org/api/fs.html#fspromisescpsrc-dest-options)

Recursively copies files and directories from one location to another.

Typescript implementation:
```typescript
async (srcPath: string|Array<string>, destPath: string|Array<string>)
```

Usage example:
```javascript
let [res, err] = await fs.cp('myfolder', 'myfolder-copy', { recursive: true });
```

---

### [fs.lchmod](https://nodejs.org/api/fs.html#fspromiseslchmodpath-mode)

Changes the permissions of a symbolic link.

Typescript implementation:
```typescript
async (path: string|Array<string>, mode?: number|string)
```

Usage example:
```javascript
let [res, err] = await fs.lchmod('symlink.txt', '755');
```

---

### [fs.lchown](https://nodejs.org/api/fs.html#fspromiseslchownpath-uid-gid)

Changes the ownership of a symbolic link.

Typescript implementation:
```typescript
async (path: string|Array<string>, uid: number, gid: number)
```

Usage example:
```javascript
let [res, err] = await fs.lchown('./test/static-testfiles/symlinkToFile-append.txt', 1200, 1201);
```

---

### [fs.link](https://nodejs.org/api/fs.html#fspromiseslinkexistingpath-newpath)

Creates a new hard link to an existing file.

Typescript implementation:
```typescript
async (existingPath: string|Array<string>, newPath: string|Array<string>)
```

Usage example:
```javascript
let [res, err] = await fs.link('file.txt', 'file-hard-link.txt');
```

---

### [fs.lstat](https://nodejs.org/api/fs.html#fspromiseslstatpath-options)

Retrieves information about a symbolic link or file without following the link.

Typescript implementation:
```typescript
async (path: string|Array<string>, options?: object)
```

Usage example:
```javascript
let [res, err] = await fs.lstat('symlinkToFile.txt');
```

---

### [fs.lutimes](https://nodejs.org/api/fs.html#fspromiseslutimespath-atime-mtime)

Changes the access and modification times of a symbolic link.

Typescript implementation:
```typescript
async (path: string|Array<string>, atime: Date|number, mtime: Date|number)
```

Usage example:
```javascript
let [res, err] = await fs.lutimes('file.txt', new Date(), new Date());
```

---

### [fs.mkdir](https://nodejs.org/api/fs.html#fspromisesmkdirpath-options)

Creates a new directory at the specified path.

Typescript implementation:
```typescript
async (path: string|Array<string>, options?: number|string)
```

Usage example:
```javascript
let [res, err] = await fs.mkdir('./my-new-folder');
```

---

### [fs.mkdtemp](https://nodejs.org/api/fs.html#fspromisesmkdtempprefix-options)

Creates a uniquely named temporary directory.

Typescript implementation:
```typescript
async (prefix: string, encoding?: Encoding)
```

Usage example:
```javascript
let [res, err] = await fs.mkdtemp('temp-');
```

---

### [fs.open](https://nodejs.org/api/fs.html#fspromisesopenpath-flags-mode)

Opens a file and returns a file handle for reading or writing.

Typescript implementation:
```typescript
async (path: string|Array<string>, flags?: Flags, mode?: number|string)
```

Usage example:
```javascript
let [res, err] = await fs.open('file.txt', 'r');
```

---

### [fs.opendir](https://nodejs.org/api/fs.html#fspromisesopendirpath-options)

Opens a directory for reading and returns a directory handle.

Typescript implementation:
```typescript
async (path: string|Array<string>, flags?: Flags, mode?: number|string)
```

Usage example:
```javascript
let [res, err] = await fs.opendir('./test', { encoding: "utf8", bufferSize: 64 });
```

---

### [fs.readFile](https://nodejs.org/api/fs.html#filehandlereadfileoptions)

Reads the contents of a file into memory.

Typescript implementation:
```typescript
async (path: string|Array<string>, options?: Encoding)
```

Usage example:
```javascript
let [res, err] = await fs.readFile('file.txt', 'utf8');
```

---

### [fs.readdir](https://nodejs.org/api/fs.html#filehandlereadfileoptions)

Reads the contents of a directory.

Typescript implementation:
```typescript
async (path: string|Array<string>, options?: object)
```

Usage example:
```javascript
let [res, err] = await fs.readdir('./my-directory');
```

---

### [fs.readlink](https://nodejs.org/api/fs.html#fspromisesreadlinkpath-options)

Reads the value of a symbolic link.

Typescript implementation:
```typescript
async (path: string|Array<string>, options?: object|string)
```

Usage example:
```javascript
let [res, err] = await fs.readlink('symlinkToFile.txt');
```

---

### [fs.realpath](https://nodejs.org/api/fs.html#fspromisesrealpathpath-options)

Resolves a path to its absolute real path, resolving symlinks.

Typescript implementation:
```typescript
async (path: string|Array<string>, options?: object)
```

Usage example:
```javascript
let [res, err] = await fs.realpath('./my-folder/../');
```

---

### [fs.rename](https://nodejs.org/api/fs.html#fspromisesrenameoldpath-newpath)

Renames or moves a file or directory.

Typescript implementation:
```typescript
async (oldPath: string|Array<string>, newPath: string|Array<string>)
```

Usage example:
```javascript
let [res, err] = await fs.rename('old.txt', 'new.txt');
```

---

### [fs.rm](https://nodejs.org/api/fs.html#fspromisesrenameoldpath-newpath)

Removes files or directories.

Typescript implementation:
```typescript
async (path: string|Array<string>, options?: object)
```

Usage example:
```javascript
let [res, err] = await fs.rm('file.txt');
```

---

### [fs.rmdir](https://nodejs.org/api/fs.html#fspromisesrmdirpath-options)

Removes a directory.

Typescript implementation:
```typescript
async (path: string|Array<string>, options?: object)
```

Usage example:
```javascript
let [res, err] = await fs.rmdir('./my-folder');
```

---

### [fs.stat](https://nodejs.org/api/fs.html#fspromisesstatpath-options)

Retrieves information about a file or directory.

Typescript implementation:
```typescript
async (path: string|Array<string>, options?: object)
```

Usage example:
```javascript
let [res, err] = await fs.stat('file.txt');
```

---

### [fs.symlink](https://nodejs.org/api/fs.html#fspromisessymlinktarget-path-type)

Creates a symbolic link to a target file or directory.

Typescript implementation:
```typescript
async (target: string|Array<string>, path: string|Array<string>, type?: string)
```

Usage example:
```javascript
let [res, err] = await fs.symlink('file.txt', 'file-symlink.txt', 'file');
```

---

### [fs.truncate](https://nodejs.org/api/fs.html#fspromisestruncatepath-len)

Truncates a file to a specified length.

Typescript implementation:
```typescript
async (path: string|Array<string>, len: number)
```

Usage example:
```javascript
let [res, err] = await fs.truncate('file.txt', 760);
```

---

### [fs.unlink](https://nodejs.org/api/fs.html#fspromisesunlinkpath)

Removes (deletes) a file.

Typescript implementation:
```typescript
async (path: string|Array<string>)
```

Usage example:
```javascript
let [res, err] = await fs.unlink('file-symlink.txt');
```

---

### [fs.utimes](https://nodejs.org/api/fs.html#fspromisesutimespath-atime-mtime)

Changes the access and modification times of a file.

Typescript implementation:
```typescript
async (path: string|Array<string>, atime: number|string|Date, mtime: number|string|Date)
```

Usage example:
```javascript
let [res, err] = await fs.utimes('file.txt', new Date(), new Date());
```

---

### [fs.watch](https://nodejs.org/api/fs.html#fspromiseswatchfilename-options)

Watches for changes in a file or directory and emits events.

Typescript implementation:
```typescript
async (filename: string|Array<string>, options?: BufferEncoding | "buffer")
```

Usage example:
```javascript
let [res, err] = await fs.watch('file.txt', (ev, file) => {
  console.log("Watcher: " + file);
});
```

---

### [fs.writeFile](https://nodejs.org/api/fs.html#fspromiseswritefilefile-data-options)

Writes data to a file, replacing its contents if it already exists.

Typescript implementation:
```typescript
async (path: string|Array<string>, data: any, options?: Encoding)
```

Usage example:
```javascript
let [res, err] = await fs.writeFile('file.txt', 'my text', 'utf8');
```

---

### The Constants

### [fs.constants](https://nodejs.org/api/fs.html#fspromisesconstants)

The `fs.constants` object provides commonly used constants for file operations.

---

### [fs.__dirname](https://nodejs.org/docs/latest/api/globals.html#__dirname)

Equivalent to Node’s `__dirname` but usable within ES modules. Returns the directory name of the current module.

Implementation:
```javascript
path.dirname(fileURLToPath(import.meta.url));
```

---

### [fs.__filename](https://nodejs.org/docs/latest/api/globals.html#__filename)

Equivalent to Node’s `__filename` but usable within ES modules. Returns the absolute filename of the current module.

Implementation:
```javascript
fileURLToPath(import.meta.url);
```

---


### Bonus Functions

---

### fs.exists
Checks if a file or directory exists, returns boolean.
Typescript implementation: 
```typescript
async (path: string|Array<string>)
```
Usage example: 
```javascript
let res = await fs.exists('file.txt');
```

---

### fs.ensureDir
Checks if a directory exists, creates it if not.
Typescript implementation: 
```typescript
async (dir: string|Array<string>)
```
Usage example: 
```javascript
let res = await fs.ensureDir('./my-dir');
```

---

### fs.readJson
Reads a JSON file and returns it as parsed Javascript object.
Typescript implementation: 
```typescript
async (path: string|Array<string>, options?: Encoding)
```
Usage example: 
```javascript
let [res, err] = await fs.readJson('my.json');
```

---

### fs.writeJson
Expects a Javascript object, will stringify it and write it out as JSON.
Typescript implementation: 
```typescript
async (path: string|Array<string>, data: Object, options?: Encoding)
```
Usage example: 
```javascript
let [res, err] = await fs.writeJson('my.json', { key : "value" });
```

---

### fs.readTextFile
Reads a text file as UTF8.
Typescript implementation: 
```typescript
async (path: string|Array<string>)
```
Usage example: 
```javascript
let [res, err] = await fs.readTextFile('file.txt');
```

---

### fs.writeTextFile
Writes out a String as UTF8.
Typescript implementation: 
```typescript
async (path: string|Array<string>, data: string)
```
Usage example: 
```javascript
let [res, err] = await fs.writeTextFile('file.txt', 'Hello world!');
```

---

### The Async Handler

This Handler is behind all Async-file-tried functions. You can pass any function (wrapped in an anonymous function) to it, 
and the Result/ Error will be returned as tuple.  

### fs.asyncHandler
Takes any asynchronous Function and will internally wrap a try-catch block around it. The Return is given in the tuple pattern `[res, err]`.
Typescript implementation: 
```typescript
asyncHandler = async (func: Function)
```
Usage example: 
```javascript
let [res, err] = await fs.asyncHandler(() => await myCustomFunction(someParam));
```
---

## Run tests

```sh
npm test
```

## License

Copyright (c) 2023–26 Florian Walzel,
MIT License
