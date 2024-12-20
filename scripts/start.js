import _0x1153fd from 'fs';
import _0xa881d8 from 'path';
async function copyFolder(_0xaca1f5, _0x59a701) {
  try {
    await _0x1153fd.promises.mkdir(_0x59a701, {
      'recursive': true
    });
    const _0xd98441 = await _0x1153fd.promises.readdir(_0xaca1f5, {
      'withFileTypes': true
    });
    for (let _0x439751 of _0xd98441) {
      const _0x53efe1 = _0xa881d8.join(_0xaca1f5, _0x439751.name);
      const _0x2a9f12 = _0xa881d8.join(_0x59a701, _0x439751.name);
      if (_0x439751.isDirectory()) {
        await copyFolder(_0x53efe1, _0x2a9f12);
      } else {
        await _0x1153fd.promises.copyFile(_0x53efe1, _0x2a9f12);
      }
    }
    console.log("Copied " + _0xaca1f5 + " to " + _0x59a701);
  } catch (_0x202e3f) {
    console.error("Error copying folder from " + _0xaca1f5 + " to " + _0x59a701 + ':', _0x202e3f);
  }
}
const accountsSrc = _0xa881d8.join(process.cwd(), "accounts");
const configSrc = _0xa881d8.join(process.cwd(), "config");
const accountsDest = _0xa881d8.join(process.cwd(), "app", "accounts");
const configDest = _0xa881d8.join(process.cwd(), "app", 'config');
(async () => {
  await copyFolder(accountsSrc, accountsDest);
  await copyFolder(configSrc, configDest);
  console.log("Starting the app...");
  await import("../app/index.js");
})();
