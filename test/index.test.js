/**
 * Tests for ./dist/index.js
 *
 * usage:
 * $ npm test
 */

import * as chai from 'chai';
import fs from '../dist/index.js';

const assert = chai.assert;
const expect = chai.expect;

describe('Tests for async-file-tried', () => {

  /****************************************
   * TEST INTERFACE
   ****************************************/

  /**
   * THE CONSTANTS
   */

  it('[1] OBJ: fs.constants shall be an object', () => {
    assert.isObject(fs.constants);
  });

  it('[2] STR: fs.__dirname shall be a string starting with "/"', () => {
    expect(fs.__dirname.startsWith("/")).to.be.true;
  });

  it('[3] STR: fs.__filename shall be a string starting with "/" and ends with ".js"', () => {
    expect(fs.__filename.startsWith("/")).to.be.true;
    expect(fs.__filename.endsWith(".js")).to.be.true;
  });

  /**
   * THE FS/PROMISE FUNCTIONS
   */

  it('[4] ERR: fs.access shall error when file inaccessible', async () => {
    let [res, err] = await fs.access('', fs.constants.R_OK);
    assert.notEqual(err, null);
  });

  it('[5] RES: fs.access shall return valid result when file is accessible', async () => {
    let [res, err] = await fs.access('./test/static-testfiles/test.json', fs.constants.R_OK);
    assert.equal(err, null);
  });

  it('[6] ERR: fs.appendFile shall error when file does not exist', async () => {
    let [res, err] = await fs.appendFile('', 'some text');
    assert.notEqual(err, null);
  });

  it('[7] RES: fs.appendFile shall return valid result when file was appended', async () => {
    let [res, err] = await fs.appendFile('./test/static-testfiles/append.txt', 'some text');
    assert.equal(err, null);
  });

  it('[8] ERR: fs.chmod shall error when file does not exist', async () => {
    let [res, err] = await fs.chmod('', '755');
    assert.notEqual(err, null);
  });

  it('[9] RES: fs.chmod shall return valid result when file rights where changed', async () => {
    let [res, err] = await fs.chmod('./test/static-testfiles/append.txt', '755');
    assert.equal(err, null);
  })

  it('[10] ERR: fs.chown shall error when file does not exist', async () => {
    let [res, err] = await fs.chown('', '755');
    assert.notEqual(err, null);
  });

  /*it('[10A] RES: fs.chown shall return valid result when file rights where changed', async () => {
    let [res, err] = await fs.chown('./test/static-testfiles/append.txt', 1541, 999);
    console.log(err);
    assert.equal(err, null);
  });*/

  it('[11] ERR: fs.copyFile shall error when file does not exist', async () => {
    let [res, err] = await fs.copyFile('', '');
    assert.notEqual(err, null);
  });

  it('[12] RES: fs.copyFile shall return valid result when file rights was copied', async () => {
    let [res, err] = await fs.copyFile('./test/static-testfiles/append.txt', './test/static-testfiles/append-copy.txt');
    assert.equal(err, null);
  })

  it('[13] ERR: fs.link shall error when file does not exist', async () => {
    let [res, err] = await fs.link('', '');
    assert.notEqual(err, null);
  });

  it('[14] RES: fs.link shall return valid result when link was set', async () => {
    let [res, err] = await fs.link('./test/static-testfiles/append.txt', './test/static-testfiles/hardlinkToFile-append.txt');
    assert.equal(err, null);
  });

  it('[15] ERR: fs.unlink shall error when file does not exist', async () => {
    let [res, err] = await fs.unlink('');
    assert.notEqual(err, null);
  });

  it('[16] RES: fs.unlink shall error return valid result when files was removed', async () => {
    let [res, err] = await fs.unlink('./test/static-testfiles/hardlinkToFile-append.txt');
    assert.equal(err, null);
  });

  it('[17] ERR: fs.symlink shall error when file does not exist', async () => {
    let [res, err] = await fs.symlink('', '', 'file');
    assert.notEqual(err, null);
  });

  it('[18] RES: fs.symlink shall return valid result when symlink was set', async () => {
    let [res, err] = await fs.symlink('./test/static-testfiles/append.txt', './test/static-testfiles/symlinkToFile-append.txt', 'file');
    assert.equal(err, null);
  });

  it('[19] ERR: fs.lchmod shall error when file does not exist', async () => {
    let [res, err] = await fs.lchmod('', '755');
    assert.notEqual(err, null);
  });

  /*it('[20] RES: fs.lchmod shall return valid result when file rights where changed', async () => {
    let [res, err] = await fs.lchmod('./test/static-testfiles/symlinkToFile-append.txt', '755');
    assert.equal(err, null);
  })*/

  it('[21] ERR: fs.lchown shall error when file does not exist', async () => {
    let [res, err] = await fs.lchown('', 1541, 1541);
    assert.notEqual(err, null);
  });

  /*
  it('[21A] RES: fs.lchown shall return valid result when file rights where changed', async () => {
   let [res, err] = await fs.lchown('./test/static-testfiles/symlinkToFile-append.txt', 1200, 1201);
   console.log(err);
   assert.equal(err, null);
 });*/

  it('[22] ERR: fs.lstat shall error when file does not exist', async () => {
    let [res, err] = await fs.lstat('');
    assert.notEqual(err, null);
  });

  it('[23] RES: fs.lstat shall return valid result when symlink stats where retrieved', async () => {
    let [res, err] = await fs.lstat('./test/static-testfiles/symlinkToFile-append.txt');
    assert.equal(err, null);
  });

  it('[24] ERR: fs.readlink shall error when link does not exist', async () => {
    let [res, err] = await fs.readlink('');
    assert.notEqual(err, null);
  });

  it('[25] RES: fs.lstat shall return valid result when symlink origin was read', async () => {
    let [res, err] = await fs.readlink('./test/static-testfiles/symlinkToFile-append.txt');
    assert.equal(err, null);
  });

  it('[26] ERR: fs.lutimes shall error when file does not exist', async () => {
    let [res, err] = await fs.lutimes('', '', '');
    assert.notEqual(err, null);
  });

  it('[27] RES: fs.lutimes shall return valid result when modification date and access time where changed', async () => {
    let [res, err] = await fs.lutimes('./test/static-testfiles/append.txt', new Date(), new Date());
    assert.equal(err, null);
  });

  it('[28] ERR: fs.mkdir shall error when dirname is empty', async () => {
    let [res, err] = await fs.mkdir('');
    assert.notEqual(err, null);
  });

  it('[29] RES: fs.mkdir shall return valid result when new folder was created', async () => {
    let [res, err] = await fs.mkdir('./test/static-testfiles/my-new-folder');
    assert.equal(err, null);
  });

  it('[30] ERR: fs.cp shall error when file does not exist', async () => {
    let [res, err] = await fs.cp('', '');
    assert.notEqual(err, null);
  });

  it('[31] RES: fs.cp shall return valid result when file rights was copied', async () => {
    let [res, err] = await fs.cp('./test/static-testfiles/my-new-folder/', './test/static-testfiles/my-new-folder-copy/', {recursive: true});
    assert.equal(err, null);
  })

  it('[32] ERR: fs.mkdtemp shall error when dirname is invalid', async () => {
    let [res, err] = await fs.mkdtemp({ });
    assert.notEqual(err, null);
  });

  it('[33] RES: fs.mkdtemp shall return valid result when new temporary folder was created', async () => {
    let [res, err] = await fs.mkdtemp('./test/static-testfiles/temp-');
    assert.equal(err, null);
    // cleanup
    await fs.rmdir(res);
  });

  it('[34] ERR: fs.open shall error when file does not exist', async () => {
    let [res, err] = await fs.open('');
    assert.notEqual(err, null);
  });

  it('[35] RES: fs.open shall return valid result when file was opened', async () => {
    let [res, err] = await fs.open('./test/static-testfiles/append.txt', 'r');
    assert.equal(err, null);
  });

  it('[36] ERR: fs.opendir shall error when file does not exist', async () => {
    let [res, err] = await fs.opendir('');
    assert.notEqual(err, null);
  });

  it('[37] RES: fs.opendir shall return valid result when file was opened', async () => {
    let [res, err] = await fs.opendir('./test/static-testfiles', { encoding: "utf8", bufferSize: 64 } );
    assert.equal(err, null);
  });

  it('[38] ERR: fs.readFile shall error when file does not exist', async () => {
    let [res, err] = await fs.readFile('');
    assert.notEqual(err, null);
  });

  it('[39] RES: fs.readFile shall return valid result when file was read', async () => {
    let [res, err] = await fs.readFile('./test/static-testfiles/append.txt' );
    assert.equal(err, null);
  });

  it('[40] ERR: fs.readdir shall error when directory does not exist', async () => {
    let [res, err] = await fs.readdir('');
    assert.notEqual(err, null);
  });

  it('[41] RES: fs.readdir shall return valid result when directory was read', async () => {
    let [res, err] = await fs.readdir('./test/static-testfiles/' );
    assert.equal(err, null);
  });

  it('[42] ERR: fs.realpath shall error when directory does not exist', async () => {
    let [res, err] = await fs.realpath('');
    assert.notEqual(err, null);
  });

  it('[43] RES: fs.realpath shall return valid result when real path was resolved', async () => {
    let [res, err] = await fs.realpath('./test/../' );
    assert.equal(err, null);
  });

  it('[44] ERR: fs.rename shall error when directory does not exist', async () => {
    let [res, err] = await fs.rename('', '');
    assert.notEqual(err, null);
  });

  it('[45] RES: fs.rename shall return valid result when file was renamed', async () => {
    let [res, err] = await fs.rename('./test/static-testfiles/append.txt', './test/static-testfiles/append-renamed.txt' );
    assert.equal(err, null);
  });

  it('[46] ERR: fs.rm  shall error when directory or file does not exist', async () => {
    let [res, err] = await fs.rm('');
    assert.notEqual(err, null);
  });

  it('[47] RES: fs.rm shall return valid result when file was removed', async () => {
    let [res, err] = await fs.rm('./test/static-testfiles/append-renamed.txt' );
    assert.equal(err, null);
  });

  it('[48] ERR: fs.rmdir shall error when directory or file does not exist', async () => {
    let [res, err] = await fs.rmdir('');
    assert.notEqual(err, null);
  });

  it('[49] RES: fs.rmdir shall return valid result when directory was removed', async () => {
    let [res, err] = await fs.rmdir('./test/static-testfiles/my-new-folder');
    assert.equal(err, null);
  });

  it('[50] ERR: fs.stat shall error when directory or file does not exist', async () => {
    let [res, err] = await fs.stat('');
    assert.notEqual(err, null);
  });

  it('[51] RES: fs.stat shall return valid result when file can be accessed for stats', async () => {
    let [res, err] = await fs.stat('./test/static-testfiles/test.json');
    assert.equal(err, null);
  });

  it('[52] ERR: fs.writeFile shall error when filename invalid', async () => {
    let [res, err] = await fs.writeFile('', '');
    assert.notEqual(err, null);
  });

  it('[53] RES: fs.writeFile shall return valid result when file was written', async () => {
    let [res, err] = await fs.writeFile('./test/static-testfiles/file.txt', 'my text');
    assert.equal(err, null);
  });

  it('[54] ERR: fs.truncate shall error when file does not exist', async () => {
    let [res, err] = await fs.truncate('');
    assert.notEqual(err, null);
  });

  it('[55] RES: fs.truncate shall return valid result when file was shortened', async () => {
    let [res, err] = await fs.truncate('./test/static-testfiles/file.txt', 0);
    assert.equal(err, null);
  });

  it('[56] ERR: fs.utimes shall error when file does not exist', async () => {
    let [res, err] = await fs.utimes('', '', '');
    assert.notEqual(err, null);
  });

  it('[57] RES: fs.utimes shall return valid result when modification date and access time where changed', async () => {
    let [res, err] = await fs.utimes('./test/static-testfiles/file.txt', new Date(), new Date());
    assert.equal(err, null);
  });

  it('[58] RES: fs.watch shall return valid result when modification date and access time where changed', async () => {
    let [res, err] = await fs.watch('./test/static-testfiles/file.txt', (ev, file) => {
      console.log("Watcher: " + file);
    });
    assert.equal(err, null);
  });

  /**
   * HELPER
   */

  it('[59] RES: fs.__resolvePath shall return joined string', async () => {
    let res = fs.__resolvePath(['./', 'folder', 'file.txt']);
    assert.isString(res);
  });


  /**
   * EXTRAS
   */

  it('[60] ERR: fs.asyncHandler shall error when Promise fails', async () => {
   async function stall() {
     await new Promise((resolve, reject) => {
       let x = false;
       if (x) resolve("OK");
       else reject("Error");
     });
   }
   let [res, err] = await fs.asyncHandler( () => stall());
   assert.notEqual(err, null);
  });

  it('[61] RES: fs.asyncHandler shall return valid result when Promise resolves', async () => {
    async function stall() {
      await new Promise(resolve => setTimeout(resolve, 2));
    }
    let [res, err] = await fs.asyncHandler( () => stall());
    assert.equal(err, null);
  });

  it('[62] ERR: fs.exists shall return FALSE when file does not exist', async () => {
    let res = await fs.exists('somenonexistentpath.txt');
    assert.equal(res, false);
  });

  it('[63] ERR: fs.exists shall return TRUE file does not exist', async () => {
    let res = await fs.exists('./test/static-testfiles/file.txt');
    assert.equal(res, true);
  });

  it('[64] ERR: fs.writeJson shall error when file does not exist', async () => {
    let [res, err] = await fs.writeJson('', '');
    assert.notEqual(err, null);
  });

  it('[65] RES: fs.writeJson shall return valid result when JSON was written', async () => {
    let [res, err] = await fs.writeJson('./test/static-testfiles/test.json', { key : "value" });
    assert.equal(err, null);
  });

  it('[66] ERR: fs.readJson shall error when file does not exist', async () => {
    let [res, err] = await fs.readJson('');
    assert.notEqual(err, null);
  });

  it('[67] RES: fs.readJson shall return object when JSON was read', async () => {
    let [res, err] = await fs.readJson('./test/static-testfiles/test.json', 'utf8');
    assert.isObject(res);
  });

});

// cleanup symlink from test run:
await fs.unlink('./test/static-testfiles/symlinkToFile-append.txt');

// cleanup symlink from test run:
await fs.rm('./test/static-testfiles/file.txt');
