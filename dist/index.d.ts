import * as fsNormal from 'node:fs';
import { CopyOptions } from "node:fs";
/****************************************
 * Export
 ****************************************/
export type Encoding = 'ascii' | 'base64' | 'binary' | 'hex' | 'ucs2' | 'utf16le' | 'utf8';
export type Flags = 'r' | 'r+' | 'rs' | 'rs+' | 'w' | 'wx' | 'w+' | 'wx+' | 'a' | 'ax' | 'a+' | 'ax+';
declare const fs: {
    access: (path: string | Array<string>, mode?: number | string) => Promise<any[]>;
    appendFile: (path: string | Array<string>, data: any, options?: {
        encoding?: Encoding;
        mode?: number | string;
        flag?: Flags;
    }) => Promise<any[]>;
    chmod: (path: string | Array<string>, mode?: number | string) => Promise<any[]>;
    chown: (path: string | Array<string>, uid: number, gid: number) => Promise<any[]>;
    copyFile: (srcPath: string | Array<string>, destPath: string | Array<string>, flags?: number) => Promise<any[]>;
    cp: (srcPath: string | Array<string>, destPath: string | Array<string>, options?: CopyOptions) => Promise<any[]>;
    lchmod: (path: string | Array<string>, mode?: number | string) => Promise<any[]>;
    lchown: (path: string | Array<string>, uid: number, gid: number) => Promise<any[]>;
    link: (existingPath: string | Array<string>, newPath: string | Array<string>) => Promise<any[]>;
    lstat: (path: string | Array<string>, options?: object) => Promise<any[]>;
    lutimes: (path: string | Array<string>, atime: Date | number, mtime: Date | number) => Promise<any[]>;
    mkdir: (path: string | Array<string>, options?: number | string | object) => Promise<any[]>;
    mkdtemp: (prefix: string, encoding?: Encoding) => Promise<any[]>;
    open: (path: string | Array<string>, flags?: Flags, mode?: number | string) => Promise<any[]>;
    opendir: (path: string | Array<string>, options?: object) => Promise<any[]>;
    readFile: (path: string | Array<string>, options?: Encoding) => Promise<any[]>;
    readdir: (path: string | Array<string>, options?: object) => Promise<any[]>;
    readlink: (path: string | Array<string>, options?: object | string) => Promise<any[]>;
    realpath: (path: string | Array<string>, options?: object) => Promise<any[]>;
    rename: (oldPath: string | Array<string>, newPath: string | Array<string>) => Promise<any[]>;
    rm: (path: string | Array<string>, options?: object) => Promise<any[]>;
    rmdir: (path: string | Array<string>, options?: object) => Promise<any[]>;
    stat: (path: string | Array<string>, options?: object) => Promise<any[]>;
    symlink: (target: string | Array<string>, path: string | Array<string>, type?: string) => Promise<any[]>;
    truncate: (path: string | Array<string>, len: number) => Promise<any[]>;
    unlink: (path: string | Array<string>) => Promise<any[]>;
    utimes: (path: string | Array<string>, atime: number | string | Date, mtime: number | string | Date) => Promise<any[]>;
    watch: (filename: string | Array<string>, options?: BufferEncoding | "buffer") => Promise<any[]>;
    writeFile: (path: string | Array<string>, data: any, options?: Encoding) => Promise<any[]>;
    constants: typeof fsNormal.constants;
    __dirname: string;
    __filename: string;
    asyncHandler: (func: Function) => Promise<any[]>;
    exists: (path: string | Array<string>) => Promise<boolean>;
    ensureDir: (dir: string | Array<string>) => Promise<boolean>;
    readJson: (path: string | Array<string>, options?: Encoding) => Promise<any[]>;
    writeJson: (path: string | Array<string>, data: Object, options?: Encoding) => Promise<any[]>;
    readTextFile: (path: string | Array<string>) => Promise<any[]>;
    writeTextFile: (path: string | Array<string>, data: string) => Promise<any[]>;
};
export default fs;
//# sourceMappingURL=index.d.ts.map