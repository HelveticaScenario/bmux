import Rect from './rect.js';
import {Record} from 'immutable';

function _getPath() {
  let ret = [];
  if (this.parent) {
    if (this.parent.firstChild === this) {
      ret.push(0);
    } else if (this.parent.secondChild === this) {
      ret.push(1);
    } else {
      throw new Error(`this intance is not contained in its parent:`, this);
    }
    return ret.concat(this.parent.getPath());
  } else {
    return ret;
  }
}

export class TreeNode extends Record({parent, firstChild, secondChild, splitType, splitRatio: 0.5}) {
  getPath(...args) {
    return _getPath.apply(this, args);
  }
}

export class DisplayNode extends Record({parent, uri: ''}) {
  getPath(...args) {
    return _getPath.apply(this, args);
  }
}
