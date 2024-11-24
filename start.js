import _0x1c1c3d from 'fs';
import _0x2e06e1 from 'path';
async function copyFolder(_0x3ce0c4, _0xa64b4) {
  try {
    await _0x1c1c3d.promises.mkdir(_0xa64b4, {
      'recursive': true
    });
    const _0x5b5848 = await _0x1c1c3d.promises.readdir(_0x3ce0c4, {
      'withFileTypes': true
    });
    for (let _0x148aa4 of _0x5b5848) {
      const _0xd85c69 = _0x2e06e1.join(_0x3ce0c4, _0x148aa4.name);
      const _0x34ba57 = _0x2e06e1.join(_0xa64b4, _0x148aa4.name);
      if (_0x148aa4.isDirectory()) {
        await copyFolder(_0xd85c69, _0x34ba57);
      } else {
        await _0x1c1c3d.promises.copyFile(_0xd85c69, _0x34ba57);
      }
    }
    console.log("Copied " + _0x3ce0c4 + " to " + _0xa64b4);
  } catch (_0x5bc70b) {
    console.error("Error copying folder from " + _0x3ce0c4 + " to " + _0xa64b4 + ':', _0x5bc70b);
  }
}
const accountsSrc = _0x2e06e1.join(process.cwd(), "accounts");
const configSrc = _0x2e06e1.join(process.cwd(), "config");
const accountsDest = _0x2e06e1.join(process.cwd(), "app", "accounts");
const configDest = _0x2e06e1.join(process.cwd(), "app", "config");
(async () => {
  await copyFolder(accountsSrc, accountsDest);
  await copyFolder(configSrc, configDest);
  console.log("Starting the app...");
  await import("./app/index.js");
})();
