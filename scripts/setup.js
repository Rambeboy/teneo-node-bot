import _0xc3d7c0 from 'fs';
import _0x1a5fb6 from 'path';
async function fileExists(_0x18a667) {
  try {
    await _0xc3d7c0.promises.access(_0x18a667);
    return true;
  } catch {
    return false;
  }
}
async function copyFile(_0x3e2ae3, _0x346156) {
  try {
    if (await fileExists(_0x346156)) {
      console.log("File already exists at " + _0x346156 + ", skipping copy.");
    } else {
      await _0xc3d7c0.promises.copyFile(_0x3e2ae3, _0x346156);
      console.log("Copied " + _0x3e2ae3 + " to " + _0x346156);
    }
  } catch (_0x27cc11) {
    console.error("Error copying file from " + _0x3e2ae3 + " to " + _0x346156 + ':', _0x27cc11);
  }
}
const copyOperations = [{
  'src': _0x1a5fb6.join("config", "config_tmp.js"),
  'dest': _0x1a5fb6.join("config", 'config.js')
}, {
  'src': _0x1a5fb6.join("config", "proxy_list_tmp.js"),
  'dest': _0x1a5fb6.join("config", "proxy_list.js")
}, {
  'src': _0x1a5fb6.join("accounts", 'accounts_tmp.js'),
  'dest': _0x1a5fb6.join("accounts", "accounts.js")
}];
(async () => {
  console.log("Copying Template File");
  for (let {
    src: _0x2e9f46,
    dest: _0x49c205
  } of copyOperations) {
    await copyFile(_0x2e9f46, _0x49c205);
  }
  console.log("\nSetup Complete");
  console.log("Open and configure\n- accounts/accounts.js\n- config/config.js\n- config/proxy_list.js");
})();
