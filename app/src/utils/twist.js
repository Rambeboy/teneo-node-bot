import { Twisters } from 'twisters';
import _0x3024c8 from './logger.js';
import _0x375b6f from '../core/core.js';
import { accountLists } from '../../accounts/accounts.js';
import { Helper } from './helper.js';
export class Twist {
  constructor() {
    this.twisters = new Twisters();
  }
  async ["log"](_0x5dad2e = '', _0x21da4c = '', _0x75d7af = new _0x375b6f(), _0x1bb0a8) {
    const _0x15670d = accountLists.find(_0x446e4c => _0x446e4c == _0x21da4c);
    const _0x4818c2 = accountLists.indexOf(_0x15670d);
    if (_0x1bb0a8 == undefined) {
      _0x3024c8.info("Account " + (_0x4818c2 + 0x1) + " - " + _0x5dad2e);
      _0x1bb0a8 = '-';
    }
    const _0x21a9df = _0x21da4c.email ?? '-';
    const _0x11373f = _0x75d7af.user ?? '-';
    const _0x131cc8 = _0x11373f.id ?? '-';
    const _0x242945 = _0x75d7af.point ?? '-';
    const _0x37ecb7 = _0x242945.pointsToday ?? '-';
    const _0x4613b7 = _0x242945.pointsTotal ?? '-';
    const _0x31e58c = _0x11373f.user_metadata ? _0x11373f.user_metadata.invited_by : '-';
    let _0xac0cab = {
      'msg': _0x5dad2e,
      'delay' : _0x1bb0a8,
      'email': _0x21a9df,
      'id': _0x131cc8,
      'pointsToday': _0x37ecb7,
      'pointsTotal': _0x4613b7,
      'inviter': _0x31e58c
    };
    let _0x3ad16b;
    _0x3ad16b = "\n================== Account " + (_0x4818c2 + 0x1) + " =================\n" + Helper.spinnerContent(_0xac0cab) + "\n==============================================\n";
    this.twisters.put(_0x15670d, {
      'text': _0x3ad16b
    });
  }
  ['info'](_0x16aa1b = '') {
    this.twisters.put(0x2, {
      'text': "\n==============================================\nInfo : " + _0x16aa1b + "\n=============================================="
    });
    return;
  }
  ["clearInfo"]() {
    this.twisters.remove(0x2);
  }
  ["clear"](_0x1df116) {
    this.twisters.remove(_0x1df116);
  }
}
